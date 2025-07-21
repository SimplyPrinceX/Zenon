(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/live-sports/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LiveSportsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const API_BASE = "https://streami.su/api";
const SPORT_ORDER = [
    "basketball",
    "football",
    "american-football",
    "hockey",
    "baseball",
    "motor-sports",
    "fight",
    "tennis",
    "rugby",
    "golf"
];
function LiveSportsPage() {
    _s();
    const [sports, setSports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSport, setSelectedSport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [matchesBySport, setMatchesBySport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [popularLive, setPopularLive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedMatch, setSelectedMatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [streams, setStreams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [streamLoading, setStreamLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPlayer, setShowPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch all sports
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveSportsPage.useEffect": ()=>{
            fetch("".concat(API_BASE, "/sports")).then({
                "LiveSportsPage.useEffect": (res)=>res.json()
            }["LiveSportsPage.useEffect"]).then({
                "LiveSportsPage.useEffect": (data)=>{
                    setSports(data || []);
                    if (!selectedSport && data && data.length > 0) setSelectedSport(data[0].id);
                }
            }["LiveSportsPage.useEffect"]);
        }
    }["LiveSportsPage.useEffect"], []);
    // Fetch matches for all sports in SPORT_ORDER
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveSportsPage.useEffect": ()=>{
            setLoading(true);
            Promise.all(SPORT_ORDER.map({
                "LiveSportsPage.useEffect": (sport)=>fetch("".concat(API_BASE, "/matches/").concat(sport)).then({
                        "LiveSportsPage.useEffect": (res)=>res.json()
                    }["LiveSportsPage.useEffect"]).then({
                        "LiveSportsPage.useEffect": (data)=>[
                                sport,
                                data || []
                            ]
                    }["LiveSportsPage.useEffect"])
            }["LiveSportsPage.useEffect"])).then({
                "LiveSportsPage.useEffect": (results)=>{
                    const bySport = {};
                    results.forEach({
                        "LiveSportsPage.useEffect": (param)=>{
                            let [sport, matches] = param;
                            bySport[sport] = matches;
                        }
                    }["LiveSportsPage.useEffect"]);
                    setMatchesBySport(bySport);
                    // Popular Live: flatten all matches and filter for live
                    const allMatches = Object.values(bySport).flat();
                    setPopularLive(allMatches.filter({
                        "LiveSportsPage.useEffect": (m)=>m.status && m.status.toLowerCase() === "live"
                    }["LiveSportsPage.useEffect"]));
                    setLoading(false);
                }
            }["LiveSportsPage.useEffect"]);
        }
    }["LiveSportsPage.useEffect"], []);
    // Open stream modal
    const openMatch = async (match)=>{
        setSelectedMatch(match);
        setStreamLoading(true);
        setShowPlayer(true);
        if (match.sources && match.sources.length > 0) {
            const source = match.sources[0];
            const res = await fetch("".concat(API_BASE, "/stream/").concat(source.source, "/").concat(source.id));
            const data = await res.json();
            setStreams(data || []);
        } else {
            setStreams([]);
        }
        setStreamLoading(false);
    };
    // Helper to get sport icon
    const getSportIcon = (sport)=>{
        if (sport.icon) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: sport.icon,
            alt: sport.name,
            className: "w-8 h-8 mb-2"
        }, void 0, false, {
            fileName: "[project]/src/app/live-sports/page.tsx",
            lineNumber: 72,
            columnNumber: 28
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-8 h-8 mb-2"
        }, void 0, false, {
            fileName: "[project]/src/app/live-sports/page.tsx",
            lineNumber: 73,
            columnNumber: 12
        }, this);
    };
    // Helper to get event/team image
    const getEventImage = (match)=>{
        if (match.image) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: match.image,
            alt: match.title || match.event,
            className: "w-full h-28 object-cover rounded-t-xl"
        }, void 0, false, {
            fileName: "[project]/src/app/live-sports/page.tsx",
            lineNumber: 78,
            columnNumber: 29
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-28 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white/40 text-2xl font-bold",
            children: "Streamed"
        }, void 0, false, {
            fileName: "[project]/src/app/live-sports/page.tsx",
            lineNumber: 79,
            columnNumber: 12
        }, this);
    };
    // Helper to get team logos (if available)
    const getTeamLogos = (match)=>{
        if (match.teams && Array.isArray(match.teams)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2 mb-2",
                children: match.teams.map((team, idx)=>{
                    var _team_name;
                    return team.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: team.logo,
                        alt: team.name,
                        className: "w-10 h-10 object-contain rounded-full bg-white"
                    }, idx, false, {
                        fileName: "[project]/src/app/live-sports/page.tsx",
                        lineNumber: 89,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-500",
                        children: (_team_name = team.name) === null || _team_name === void 0 ? void 0 : _team_name[0]
                    }, idx, false, {
                        fileName: "[project]/src/app/live-sports/page.tsx",
                        lineNumber: 91,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/live-sports/page.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this);
        }
        return null;
    };
    // Card for a match
    const MatchCard = (param)=>{
        let { match } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#18181b] rounded-xl shadow-md overflow-hidden cursor-pointer border border-[#232329] relative min-w-[220px] max-w-[260px] flex flex-col",
            onClick: ()=>openMatch(match),
            children: [
                getEventImage(match),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-2 left-2",
                    children: [
                        match.status && match.status.toLowerCase() === "live" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-red-600 text-white text-xs font-bold px-2 py-1 rounded",
                            children: "LIVE"
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        match.time && match.status && match.status.toLowerCase() !== "live" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-black/80 text-white text-xs font-bold px-2 py-1 rounded",
                            children: match.time
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        match.date && !match.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-black/80 text-white text-xs font-bold px-2 py-1 rounded",
                            children: match.date
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 107,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-2 right-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-yellow-400/90 hover:bg-yellow-500 text-white rounded-full p-1 shadow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/live-sports/page.tsx",
                                lineNumber: 120,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 118,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 flex-1 flex flex-col justify-between",
                    children: [
                        getTeamLogos(match),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-bold text-base text-white truncate mb-1",
                            title: match.title || match.event,
                            children: match.title || match.event
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 125,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-400 text-xs mb-1",
                            children: match.competition || match.league || ''
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 126,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500 text-xs",
                            children: match.sport || ''
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 127,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 123,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-sports/page.tsx",
            lineNumber: 102,
            columnNumber: 5
        }, this);
    };
    // Carousel for a section
    const SectionCarousel = (param)=>{
        let { title, matches } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-3 text-white drop-shadow-lg",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 135,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent",
                    children: matches.map((match)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatchCard, {
                            match: match
                        }, match.id, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 137,
                            columnNumber: 33
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 136,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-sports/page.tsx",
            lineNumber: 134,
            columnNumber: 5
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-extrabold text-white mb-8 drop-shadow-lg",
                children: "Live Sports"
            }, void 0, false, {
                fileName: "[project]/src/app/live-sports/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 overflow-x-auto py-4 px-1 mb-8 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent",
                children: SPORT_ORDER.map((sportId)=>{
                    const sport = sports.find((s)=>s.id === sportId);
                    if (!sport) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#232329] rounded-xl min-w-[140px] h-20 flex flex-col items-center justify-center px-4 py-2 text-white font-bold text-lg shadow-md transition-all duration-200 ".concat(selectedSport === sport.id ? 'ring-2 ring-cyan-400' : ''),
                        onClick: ()=>setSelectedSport(sport.id),
                        children: [
                            getSportIcon(sport),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: sport.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/live-sports/page.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)
                        ]
                    }, sport.id, true, {
                        fileName: "[project]/src/app/live-sports/page.tsx",
                        lineNumber: 151,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/live-sports/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            popularLive.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCarousel, {
                title: "Popular Live",
                matches: popularLive
            }, void 0, false, {
                fileName: "[project]/src/app/live-sports/page.tsx",
                lineNumber: 163,
                columnNumber: 34
            }, this),
            SPORT_ORDER.map((sportId)=>{
                const sport = sports.find((s)=>s.id === sportId);
                if (!sport || !matchesBySport[sportId] || matchesBySport[sportId].length === 0) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCarousel, {
                    title: "Popular ".concat(sport.name),
                    matches: matchesBySport[sportId]
                }, sportId, false, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 168,
                    columnNumber: 16
                }, this);
            }),
            showPlayer && selectedMatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#232329] max-w-2xl w-full rounded-2xl shadow-2xl p-6 sm:p-8 relative flex flex-col items-center justify-center mx-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-3 right-3 p-2 rounded-full bg-white/30 hover:bg-red-400/60 transition",
                            onClick: ()=>setShowPlayer(false),
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/live-sports/page.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4 text-center",
                            children: selectedMatch.title || selectedMatch.event
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        streamLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white text-lg",
                            children: "Loading stream..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 183,
                            columnNumber: 15
                        }, this) : streams.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white/60",
                            children: "No streams available."
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 185,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: streams[0].url,
                            allowFullScreen: true,
                            className: "w-full aspect-video rounded-xl border border-white/20 shadow-lg",
                            style: {
                                minHeight: 320
                            },
                            title: "Live Stream"
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 187,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/live-sports/page.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/live-sports/page.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(LiveSportsPage, "p1GyxzeNhBKNzrqy3f1pEGnnqgQ=");
_c = LiveSportsPage;
var _c;
__turbopack_context__.k.register(_c, "LiveSportsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_live-sports_page_tsx_dce2cf77._.js.map