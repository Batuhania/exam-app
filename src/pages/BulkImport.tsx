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
        <div className="min-h-screen p-4 md:p-8 pb-24 animate-fade-in">
            <header className="flex items-center justify-between mb-8 max-w-3xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Toplu Soru İçe Aktarma
                    </h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">JSON formatında soru yükle</p>
                </div>
                <div className="w-10"></div>
            </header>

            <div className="max-w-3xl mx-auto space-y-6">
                {/* Mode Selection */}
                <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                    <button
                        onClick={() => setMode('upload')}
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition ${mode === 'upload' ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`}
                    >
                        <Upload className="w-4 h-4" />
                        <span>Dosya Yükle</span>
                    </button>
                    <button
                        onClick={() => setMode('paste')}
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition ${mode === 'paste' ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`}
                    >
                        <FileJson className="w-4 h-4" />
                        <span>JSON Yapıştır</span>
                    </button>
                </div>

                {/* Upload Area */}
                {mode === 'upload' ? (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-10 text-center cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition group"
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".json"
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition">
                            <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">JSON dosyası seçin veya sürükleyin</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Desteklenen format: .json</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <textarea
                            value={rawJson}
                            onChange={(e) => setRawJson(e.target.value)}
                            placeholder={sampleJsonTemplate}
                            className="w-full h-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300 font-mono placeholder-gray-300 dark:placeholder-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none shadow-sm"
                        />
                        <button
                            onClick={handlePasteImport}
                            disabled={!rawJson.trim()}
                            className="w-full py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Soruları İçe Aktar</span>
                        </button>
                    </div>
                )}

                {/* Template Info */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">📋 JSON Formatı</h3>
                    <pre className="text-xs text-gray-500 dark:text-gray-400 font-mono overflow-x-auto whitespace-pre bg-gray-50 dark:bg-gray-900 rounded-lg p-3 border border-gray-100 dark:border-gray-700">
                        {sampleJsonTemplate}
                    </pre>
                </div>

                {/* Import Result */}
                {result && (
                    <div className="animate-fade-in-up space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">İçe Aktarma Sonucu</h3>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
                                <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">{result.total}</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Toplam</p>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4 text-center border border-emerald-200 dark:border-emerald-700">
                                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{result.valid}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Geçerli</p>
                            </div>
                            <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 text-center border border-amber-200 dark:border-amber-700">
                                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{result.duplicates}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Yinelenen</p>
                            </div>
                        </div>

                        {result.errors.length > 0 && (
                            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
                                <div className="flex items-center space-x-2 mb-2">
                                    <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400" />
                                    <h4 className="text-sm font-semibold text-red-600 dark:text-red-400">Hatalar ({result.errors.length})</h4>
                                </div>
                                <ul className="text-xs text-red-500 dark:text-red-400 space-y-1 max-h-32 overflow-y-auto">
                                    {result.errors.map((err, i) => (
                                        <li key={i}>• {err}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {importedQuestions.length > 0 && (
                            <>
                                <button
                                    onClick={() => setPreviewVisible(!previewVisible)}
                                    className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition underline"
                                >
                                    {previewVisible ? 'Önizlemeyi Kapat' : `${importedQuestions.length} soru önizle`}
                                </button>

                                {previewVisible && (
                                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                        {importedQuestions.slice(0, 10).map((q, i) => (
                                            <div key={q.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                                                <div className="flex items-start justify-between">
                                                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium flex-1">{q.text}</p>
                                                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">#{q.id}</span>
                                                </div>
                                                <div className="mt-2 flex flex-wrap gap-1">
                                                    {q.options.map((opt, oi) => (
                                                        <span key={oi} className={`text-xs px-2 py-0.5 rounded ${oi === q.correctIndex ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                                                            {String.fromCharCode(65 + oi)}) {opt.substring(0, 30)}{opt.length > 30 ? '...' : ''}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        {importedQuestions.length > 10 && (
                                            <p className="text-xs text-gray-400 dark:text-gray-500 text-center">... ve {importedQuestions.length - 10} soru daha</p>
                                        )}
                                    </div>
                                )}

                                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-700 flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{importedQuestions.length} soru başarıyla doğrulandı!</p>
                                        <p className="text-xs text-emerald-600/60 dark:text-emerald-400/60 mt-0.5">Bu soruları kullanmak için, JSON dosyasını <code className="bg-emerald-100 dark:bg-emerald-800 px-1 rounded">expansion_questions.ts</code> içine import edin.</p>
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
