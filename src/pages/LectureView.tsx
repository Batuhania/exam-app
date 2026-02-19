import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, PlayCircle, Clock, BookOpen } from 'lucide-react';
import { lectures } from '../data/lectures';
import { topics } from '../data/questions';

// Simple markdown-to-JSX renderer supporting tables, bold, links, blockquotes, headers, lists, horizontal rules
const renderContent = (content: string): React.ReactNode[] => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];
        const trimmed = line.trim();

        // Skip empty lines
        if (trimmed === '') {
            i++;
            continue;
        }

        // Horizontal rule
        if (/^---+$/.test(trimmed) || /^\*\*\*+$/.test(trimmed)) {
            elements.push(<hr key={i} className="my-4 border-gray-200 dark:border-gray-700" />);
            i++;
            continue;
        }

        // Table detection: line starts with |
        if (trimmed.startsWith('|')) {
            const tableLines: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith('|')) {
                tableLines.push(lines[i].trim());
                i++;
            }
            elements.push(renderTable(tableLines, elements.length));
            continue;
        }

        // Headers
        if (trimmed.startsWith('# ')) {
            elements.push(
                <h1 key={i} className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                    {renderInline(trimmed.replace('# ', ''))}
                </h1>
            );
            i++;
            continue;
        }
        if (trimmed.startsWith('## ')) {
            elements.push(
                <h2 key={i} className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mt-5 mb-2">
                    {renderInline(trimmed.replace('## ', ''))}
                </h2>
            );
            i++;
            continue;
        }
        if (trimmed.startsWith('### ')) {
            elements.push(
                <h3 key={i} className="text-base font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
                    {renderInline(trimmed.replace('### ', ''))}
                </h3>
            );
            i++;
            continue;
        }

        // Blockquote (also handles > 💡 and > ⚠️)
        if (trimmed.startsWith('> ')) {
            const quoteText = trimmed.replace('> ', '');
            const isWarning = quoteText.includes('⚠️') || quoteText.includes('KRİTİK');
            const isTip = quoteText.includes('💡') || quoteText.includes('İpucu');
            const isInfo = quoteText.includes('📌') || quoteText.includes('Not');

            let bgClass = 'bg-amber-50 dark:bg-amber-900/20 border-amber-400 dark:border-amber-500 text-amber-800 dark:text-amber-300';
            if (isWarning) bgClass = 'bg-red-50 dark:bg-red-900/20 border-red-400 dark:border-red-500 text-red-800 dark:text-red-300';
            else if (isTip) bgClass = 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 dark:border-blue-500 text-blue-800 dark:text-blue-300';
            else if (isInfo) bgClass = 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-500 text-emerald-800 dark:text-emerald-300';

            elements.push(
                <div key={i} className={`border-l-4 p-3 my-4 rounded-r-lg text-sm ${bgClass}`}>
                    {renderInline(quoteText)}
                </div>
            );
            i++;
            continue;
        }

        // List items (- or * or numbered)
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            const listItems: string[] = [];
            while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
                listItems.push(lines[i].trim().replace(/^[-*]\s/, ''));
                i++;
            }
            elements.push(
                <ul key={`list-${elements.length}`} className="ml-4 space-y-1 my-2">
                    {listItems.map((item, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 list-disc text-sm leading-relaxed">
                            {renderInline(item)}
                        </li>
                    ))}
                </ul>
            );
            continue;
        }

        // Numbered list
        if (/^\d+\.\s/.test(trimmed)) {
            const listItems: string[] = [];
            while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
                listItems.push(lines[i].trim().replace(/^\d+\.\s/, ''));
                i++;
            }
            elements.push(
                <ol key={`ol-${elements.length}`} className="ml-4 space-y-1 my-2 list-decimal">
                    {listItems.map((item, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {renderInline(item)}
                        </li>
                    ))}
                </ol>
            );
            continue;
        }

        // Default: paragraph
        elements.push(
            <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 text-sm">
                {renderInline(trimmed)}
            </p>
        );
        i++;
    }

    return elements;
};

// Render inline markdown: **bold**, `code`, etc.
const renderInline = (text: string): React.ReactNode => {
    // Split on **bold**, `code` patterns
    const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
            return <code key={i} className="bg-gray-100 dark:bg-gray-700 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded text-xs font-mono">{part.slice(1, -1)}</code>;
        }
        return part;
    });
};

// Render markdown table
const renderTable = (tableLines: string[], keyBase: number): React.ReactNode => {
    if (tableLines.length < 2) return null;

    const parseRow = (line: string) =>
        line.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim());

    const headers = parseRow(tableLines[0]);
    // Skip separator line (|---|---|)
    const startIdx = tableLines[1].includes('---') ? 2 : 1;
    const rows = tableLines.slice(startIdx).map(parseRow);

    return (
        <div key={`table-${keyBase}`} className="my-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                        {headers.map((h, idx) => (
                            <th key={idx} className="text-left px-3 py-2 font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600 text-xs">
                                {renderInline(h)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                            {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-3 py-2 text-gray-700 dark:text-gray-300 text-xs">
                                    {renderInline(cell)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const LectureView: React.FC = () => {
    const { topicId } = useParams<{ topicId: string }>();
    const navigate = useNavigate();

    const id = parseInt(topicId || '0');
    const lecture = lectures.find(l => l.topicId === id);
    const topic = topics.find(t => t.id === id);

    if (!lecture || !topic) {
        return (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <p>Bu konu için henüz anlatım eklenmedi.</p>
                <button onClick={() => navigate(-1)} className="mt-4 text-emerald-600 dark:text-emerald-400 font-bold">Geri Dön</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-24">
            {/* Header */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between -mx-4 sm:-mx-6 mb-4">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <ChevronLeft className="text-gray-400 dark:text-gray-500" />
                </button>
                <h1 className="font-bold text-gray-800 dark:text-gray-200 truncate max-w-[200px] text-sm">{topic.name}</h1>
                <div className="w-8"></div>
            </div>

            <div className="max-w-2xl mx-auto">
                {/* Meta Card */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mb-6 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                            <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="font-bold text-gray-900 dark:text-white text-lg">{lecture.title}</h2>
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                                <Clock className="w-3 h-3 mr-1" />
                                {lecture.readTime} okuma süresi
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose max-w-none">
                    {renderContent(lecture.content)}
                </div>

                {/* Floating Action Button */}
                <div className="fixed bottom-24 right-5 left-5 max-w-2xl mx-auto">
                    <button
                        onClick={() => navigate(`/quiz/${id}`)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-95"
                    >
                        <PlayCircle className="w-5 h-5" />
                        <span>Testi Başlat</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LectureView;
