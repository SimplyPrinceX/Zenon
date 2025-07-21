(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/live-sports/[sport]/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>MatchPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const API_BASE = "https://streami.su/api";
function formatDate(ms) {
    if (!ms) return "";
    const d = new Date(ms);
    return d.toLocaleString([], {
        dateStyle: "medium",
        timeStyle: "short"
    });
}
function MatchPage() {
    var _match_teams_home, _match_teams, _match_teams_away, _match_teams1, _match_teams_home1, _match_teams2, _match_teams_away1, _match_teams3;
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { sport, id } = params;
    const [match, setMatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [streams, setStreams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedStream, setSelectedStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [streamLoading, setStreamLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatchPage.useEffect": ()=>{
            if (!sport || !id) return;
            setLoading(true);
            fetch("".concat(API_BASE, "/matches/").concat(sport)).then({
                "MatchPage.useEffect": (res)=>res.json()
            }["MatchPage.useEffect"]).then({
                "MatchPage.useEffect": (matches)=>{
                    const found = (matches || []).find({
                        "MatchPage.useEffect.found": (m)=>m.id === id
                    }["MatchPage.useEffect.found"]);
                    setMatch(found || null);
                    setLoading(false);
                    if (found && found.sources && found.sources.length > 0) {
                        // Fetch streams for the first source by default
                        fetchStreams(found.sources[0].source, found.sources[0].id);
                    }
                }
            }["MatchPage.useEffect"]);
        }
    }["MatchPage.useEffect"], [
        sport,
        id
    ]);
    const fetchStreams = (source, sourceId)=>{
        setStreamLoading(true);
        fetch("".concat(API_BASE, "/stream/").concat(source, "/").concat(sourceId)).then((res)=>res.json()).then((data)=>{
            setStreams(data || []);
            setSelectedStream(data && data.length > 0 ? data[0] : null);
            setStreamLoading(false);
        });
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-white text-lg",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
        lineNumber: 50,
        columnNumber: 23
    }, this);
    if (!match) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-red-500 text-lg",
        children: "Match not found."
    }, void 0, false, {
        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
        lineNumber: 51,
        columnNumber: 22
    }, this);
    const homeBadge = (_match_teams = match.teams) === null || _match_teams === void 0 ? void 0 : (_match_teams_home = _match_teams.home) === null || _match_teams_home === void 0 ? void 0 : _match_teams_home.badge;
    const awayBadge = (_match_teams1 = match.teams) === null || _match_teams1 === void 0 ? void 0 : (_match_teams_away = _match_teams1.away) === null || _match_teams_away === void 0 ? void 0 : _match_teams_away.badge;
    const poster = match.poster;
    let posterUrl = "";
    if (poster) {
        posterUrl = "".concat(API_BASE, "/images/proxy/").concat(poster, ".webp");
    } else if (homeBadge && awayBadge) {
        posterUrl = "".concat(API_BASE, "/images/poster/").concat(homeBadge, "/").concat(awayBadge, ".webp");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto px-4 py-8 mt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.back(),
                className: "mb-6 text-cyan-400 hover:underline",
                children: "← Back to Live Sports"
            }, void 0, false, {
                fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#18181b] rounded-2xl shadow-lg border border-[#232329] overflow-hidden mb-8",
                children: [
                    posterUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: posterUrl,
                        alt: match.title,
                        className: "w-full h-48 object-cover",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white/40 text-2xl font-bold",
                        children: "Streamed"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-4",
                                children: [
                                    homeBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "".concat(API_BASE, "/images/badge/").concat(homeBadge, ".webp"),
                                        alt: (_match_teams2 = match.teams) === null || _match_teams2 === void 0 ? void 0 : (_match_teams_home1 = _match_teams2.home) === null || _match_teams_home1 === void 0 ? void 0 : _match_teams_home1.name,
                                        className: "w-12 h-12 object-contain rounded-full bg-white",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-lg text-white",
                                        children: match.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    awayBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "".concat(API_BASE, "/images/badge/").concat(awayBadge, ".webp"),
                                        alt: (_match_teams3 = match.teams) === null || _match_teams3 === void 0 ? void 0 : (_match_teams_away1 = _match_teams3.away) === null || _match_teams_away1 === void 0 ? void 0 : _match_teams_away1.name,
                                        className: "w-12 h-12 object-contain rounded-full bg-white",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 text-sm mb-2",
                                children: formatDate(match.date)
                            }, void 0, false, {
                                fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500 text-xs mb-4",
                                children: match.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            match.status && match.status.toLowerCase() === "live" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-red-600 text-white text-xs font-bold px-2 py-1 rounded",
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#232329] rounded-2xl shadow-lg border border-[#232329] p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-white mb-4",
                        children: "Available Streams"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    streamLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-lg",
                        children: "Loading streams..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this) : streams.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white/60",
                        children: "No streams available for this match."
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: streams.map((stream)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-3 px-4 py-2 rounded-lg border border-cyan-400 text-white font-semibold transition ".concat((selectedStream === null || selectedStream === void 0 ? void 0 : selectedStream.id) === stream.id ? 'bg-cyan-900' : 'bg-[#18181b] hover:bg-cyan-800'),
                                onClick: ()=>setSelectedStream(stream),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cyan-400 font-bold",
                                        children: [
                                            "Stream #",
                                            stream.streamNo
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: stream.language
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: stream.hd ? 'HD' : 'SD'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: [
                                            "Source: ",
                                            stream.source
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, stream.id, true, {
                                fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            selectedStream && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black rounded-2xl shadow-lg border border-[#232329] p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-white mb-2",
                        children: "Now Playing"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: selectedStream.embedUrl,
                        allowFullScreen: true,
                        className: "w-full aspect-video rounded-xl border border-white/20 shadow-lg",
                        style: {
                            minHeight: 320
                        },
                        title: "Live Stream"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/live-sports/[sport]/[id]/page.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(MatchPage, "k/1f7wVCv1KjjW8Bfn03+fQBc3w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MatchPage;
var _c;
__turbopack_context__.k.register(_c, "MatchPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_957d7bd1._.js.map