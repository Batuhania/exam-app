import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Upload, FileJson, CheckCircle, AlertTriangle, Plus } from 'lucide-react';
import { Question, sampleQuestions } from '../data/questions';

interface ImportResult {
    total: number;
    valid: number;
    duplicates: number;
    errors: string[];
}

const BulkImport: React.FC = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [importedQuestions, setImportedQuestions] = useState<Question[]>([]);
    const [result, setResult] = useState<ImportResult | null>(null);
    const [rawJson, setRawJson] = useState('');
    const [mode, setMode] = useState<'upload' | 'paste'>('upload');
    const [previewVisible, setPreviewVisible] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validateQuestion = (q: any, index: number): { valid: boolean; errors: string[] } => {
        const errors: string[] = [];
        if (!q.id || typeof q.id !== 'number') errors.push(`Soru ${index + 1}: 'id' eksik veya geçersiz`);
        if (!q.text || typeof q.text !== 'string') errors.push(`Soru ${index + 1}: 'text' eksik`);
        if (!Array.isArray(q.options) || q.options.length < 2) errors.push(`Soru ${index + 1}: 'options' en az 2 seçenek içermeli`);
        if (typeof q.correctIndex !== 'number' || q.correctIndex < 0) errors.push(`Soru ${index + 1}: 'correctIndex' geçersiz`);
        if (!q.explanation || typeof q.explanation !== 'string') errors.push(`Soru ${index + 1}: 'explanation' eksik`);
        return { valid: errors.length === 0, errors };
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const processQuestions = (data: any[]) => {
        const allErrors: string[] = [];
        const validQuestions: Question[] = [];
        let duplicateCount = 0;
        const existingIds = new Set(sampleQuestions.map(q => q.id));

        data.forEach((q, i) => {
            const validation = validateQuestion(q, i);
            if (!validation.valid) {
                allErrors.push(...validation.errors);
                return;
            }
            if (existingIds.has(q.id)) {
                duplicateCount++;
                return;
            }
            validQuestions.push({
                id: q.id,
                text: q.text,
                options: q.options,
                correctIndex: q.correctIndex,
                explanation: q.explanation,
                ...(q.image ? { image: q.image } : {})
            });
        });

        setImportedQuestions(validQuestions);
        setResult({
            total: data.length,
            valid: validQuestions.length,
            duplicates: duplicateCount,
            errors: allErrors
        });
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonData = JSON.parse(e.target?.result as string);
                const questions = Array.isArray(jsonData) ? jsonData : jsonData.questions || [];
                processQuestions(questions);
            } catch (err) {
                setResult({ total: 0, valid: 0, duplicates: 0, errors: ['JSON dosyası okunamadı. Format hatalı.'] });
            }
        };
        reader.readAsText(file);
    };

    const handlePasteImport = () => {
        try {
            const jsonData = JSON.parse(rawJson);
            const questions = Array.isArray(jsonData) ? jsonData : jsonData.questions || [];
            processQuestions(questions);
        } catch (err) {
            setResult({ total: 0, valid: 0, duplicates: 0, errors: ['JSON formatı hatalı. Lütfen geçerli bir JSON yapıştırın.'] });
        }
    };

    const sampleJsonTemplate = `[
  {
    "id": 9001,
    "text": "Örnek soru metni?",
    "options": ["Seçenek A", "Seçenek B", "Seçenek C", "Seçenek D", "Seçenek E"],
    "correctIndex": 0,
    "explanation": "Doğru cevap A çünkü..."
  }
]`;

    return (
        <div className="min-h-screen bg-slate-950 p-4 md:p-8 pb-24 animate-fade-in">
            {/* Header */}
            <header className="flex items-center justify-between mb-8 max-w-3xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                        Toplu Soru İçe Aktarma
                    </h1>
                    <p className="text-xs text-slate-500">JSON formatında soru yükle</p>
                </div>
                <div className="w-10"></div>
            </header>

            <div className="max-w-3xl mx-auto space-y-6">
                {/* Mode Selection */}
                <div className="flex space-x-2 bg-slate-900 rounded-xl p-1 border border-slate-800">
                    <button
                        onClick={() => setMode('upload')}
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition ${mode === 'upload' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                        <Upload className="w-4 h-4" />
                        <span>Dosya Yükle</span>
                    </button>
                    <button
                        onClick={() => setMode('paste')}
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition ${mode === 'paste' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                        <FileJson className="w-4 h-4" />
                        <span>JSON Yapıştır</span>
                    </button>
                </div>

                {/* Upload Area */}
                {mode === 'upload' ? (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-700 rounded-2xl p-10 text-center cursor-pointer hover:border-violet-500/50 hover:bg-violet-500/5 transition group"
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".json"
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-violet-500/10 transition">
                            <Upload className="w-8 h-8 text-slate-500 group-hover:text-violet-400 transition" />
                        </div>
                        <p className="text-slate-300 font-medium">JSON dosyası seçin veya sürükleyin</p>
                        <p className="text-xs text-slate-500 mt-1">Desteklenen format: .json</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <textarea
                            value={rawJson}
                            onChange={(e) => setRawJson(e.target.value)}
                            placeholder={sampleJsonTemplate}
                            className="w-full h-64 bg-slate-900 border border-slate-700 rounded-xl p-4 text-sm text-slate-300 font-mono placeholder-slate-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 resize-none"
                        />
                        <button
                            onClick={handlePasteImport}
                            disabled={!rawJson.trim()}
                            className="w-full py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Soruları İçe Aktar</span>
                        </button>
                    </div>
                )}

                {/* Template Info */}
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800">
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">📋 JSON Formatı</h3>
                    <pre className="text-xs text-slate-500 font-mono overflow-x-auto whitespace-pre bg-slate-950 rounded-lg p-3 border border-slate-800">
                        {sampleJsonTemplate}
                    </pre>
                </div>

                {/* Import Result */}
                {result && (
                    <div className="animate-fade-in-up space-y-4">
                        <h3 className="text-lg font-bold text-white">İçe Aktarma Sonucu</h3>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-slate-900 rounded-xl p-4 text-center border border-slate-800">
                                <p className="text-2xl font-bold text-slate-300">{result.total}</p>
                                <p className="text-xs text-slate-500 mt-1">Toplam</p>
                            </div>
                            <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/20">
                                <p className="text-2xl font-bold text-emerald-400">{result.valid}</p>
                                <p className="text-xs text-slate-400 mt-1">Geçerli</p>
                            </div>
                            <div className="bg-amber-500/10 rounded-xl p-4 text-center border border-amber-500/20">
                                <p className="text-2xl font-bold text-amber-400">{result.duplicates}</p>
                                <p className="text-xs text-slate-400 mt-1">Yinelenen</p>
                            </div>
                        </div>

                        {/* Errors */}
                        {result.errors.length > 0 && (
                            <div className="bg-rose-500/5 rounded-xl p-4 border border-rose-500/20">
                                <div className="flex items-center space-x-2 mb-2">
                                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                                    <h4 className="text-sm font-semibold text-rose-300">Hatalar ({result.errors.length})</h4>
                                </div>
                                <ul className="text-xs text-rose-300/70 space-y-1 max-h-32 overflow-y-auto">
                                    {result.errors.map((err, i) => (
                                        <li key={i}>• {err}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Preview Toggle */}
                        {importedQuestions.length > 0 && (
                            <>
                                <button
                                    onClick={() => setPreviewVisible(!previewVisible)}
                                    className="text-sm text-violet-400 hover:text-violet-300 transition underline"
                                >
                                    {previewVisible ? 'Önizlemeyi Kapat' : `${importedQuestions.length} soru önizle`}
                                </button>

                                {previewVisible && (
                                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                        {importedQuestions.slice(0, 10).map((q, i) => (
                                            <div key={q.id} className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                                                <div className="flex items-start justify-between">
                                                    <p className="text-sm text-slate-300 font-medium flex-1">{q.text}</p>
                                                    <span className="text-xs text-slate-600 ml-2">#{q.id}</span>
                                                </div>
                                                <div className="mt-2 flex flex-wrap gap-1">
                                                    {q.options.map((opt, oi) => (
                                                        <span key={oi} className={`text-xs px-2 py-0.5 rounded ${oi === q.correctIndex ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-500'}`}>
                                                            {String.fromCharCode(65 + oi)}) {opt.substring(0, 30)}{opt.length > 30 ? '...' : ''}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        {importedQuestions.length > 10 && (
                                            <p className="text-xs text-slate-500 text-center">... ve {importedQuestions.length - 10} soru daha</p>
                                        )}
                                    </div>
                                )}

                                {/* Success Message */}
                                <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20 flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-emerald-300">{importedQuestions.length} soru başarıyla doğrulandı!</p>
                                        <p className="text-xs text-emerald-400/60 mt-0.5">Bu soruları kullanmak için, JSON dosyasını <code className="bg-emerald-500/10 px-1 rounded">expansion_questions.ts</code> içine import edin.</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BulkImport;
