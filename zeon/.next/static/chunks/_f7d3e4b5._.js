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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const API_BASE = "https://streami.su/api";
const SPORT_ORDER = [
    "football",
    "basketball",
    "american-football",
    "hockey",
    "baseball",
    "motor-sports",
    "fight",
    "tennis",
    "rugby",
    "golf"
];
function formatDate(ms) {
    if (!ms) return "";
    const d = new Date(ms);
    return d.toLocaleString([], {
        dateStyle: "medium",
        timeStyle: "short"
    });
}
function LiveSportsPage() {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [sports, setSports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [matchesBySport, setMatchesBySport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [popularLive, setPopularLive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    // Fetch all sports
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveSportsPage.useEffect": ()=>{
            fetch("".concat(API_BASE, "/sports")).then({
                "LiveSportsPage.useEffect": (res)=>res.json()
            }["LiveSportsPage.useEffect"]).then({
                "LiveSportsPage.useEffect": (data)=>setSports(data || [])
            }["LiveSportsPage.useEffect"]);
        }
    }["LiveSportsPage.useEffect"], []);
    // Fetch matches for all sports in SPORT_ORDER and popular live
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveSportsPage.useEffect": ()=>{
            setLoading(true);
            Promise.all([
                fetch("".concat(API_BASE, "/matches/live/popular")).then({
                    "LiveSportsPage.useEffect": (res)=>res.json()
                }["LiveSportsPage.useEffect"]),
                ...SPORT_ORDER.map({
                    "LiveSportsPage.useEffect": (sport)=>fetch("".concat(API_BASE, "/matches/").concat(sport, "/popular")).then({
                            "LiveSportsPage.useEffect": (res)=>res.json()
                        }["LiveSportsPage.useEffect"]).then({
                            "LiveSportsPage.useEffect": (data)=>[
                                    sport,
                                    data || []
                                ]
                        }["LiveSportsPage.useEffect"])
                }["LiveSportsPage.useEffect"])
            ]).then({
                "LiveSportsPage.useEffect": (param)=>{
                    let [popularLiveData, ...results] = param;
                    setPopularLive(popularLiveData || []);
                    const bySport = {};
                    results.forEach({
                        "LiveSportsPage.useEffect": (param)=>{
                            let [sport, matches] = param;
                            bySport[sport] = matches;
                        }
                    }["LiveSportsPage.useEffect"]);
                    setMatchesBySport(bySport);
                    setLoading(false);
                }
            }["LiveSportsPage.useEffect"]);
        }
    }["LiveSportsPage.useEffect"], []);
    // Card for a match
    const MatchCard = (param)=>{
        let { match } = param;
        var _match_teams_home, _match_teams, _match_teams_away, _match_teams1, _match_teams_home1, _match_teams2, _match_teams_away1, _match_teams3;
        _s1();
        const homeBadge = (_match_teams = match.teams) === null || _match_teams === void 0 ? void 0 : (_match_teams_home = _match_teams.home) === null || _match_teams_home === void 0 ? void 0 : _match_teams_home.badge;
        const awayBadge = (_match_teams1 = match.teams) === null || _match_teams1 === void 0 ? void 0 : (_match_teams_away = _match_teams1.away) === null || _match_teams_away === void 0 ? void 0 : _match_teams_away.badge;
        const homeName = (_match_teams2 = match.teams) === null || _match_teams2 === void 0 ? void 0 : (_match_teams_home1 = _match_teams2.home) === null || _match_teams_home1 === void 0 ? void 0 : _match_teams_home1.name;
        const awayName = (_match_teams3 = match.teams) === null || _match_teams3 === void 0 ? void 0 : (_match_teams_away1 = _match_teams3.away) === null || _match_teams_away1 === void 0 ? void 0 : _match_teams_away1.name;
        const poster = match.poster;
        let posterUrl = "";
        if (poster) {
            posterUrl = "".concat(API_BASE, "/images/proxy/").concat(poster, ".webp");
        } else if (homeBadge && awayBadge) {
            posterUrl = "".concat(API_BASE, "/images/poster/").concat(homeBadge, "/").concat(awayBadge, ".webp");
        }
        // Fallback image handler
        const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#18181b] rounded-xl shadow-md overflow-hidden cursor-pointer border border-[#232329] relative min-w-[220px] max-w-[260px] flex flex-col hover:shadow-xl transition",
            onClick: ()=>router.push("/live-sports/".concat(match.category, "/").concat(match.id)),
            children: [
                posterUrl && !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: posterUrl,
                    alt: match.title,
                    className: "w-full h-28 object-cover rounded-t-xl",
                    loading: "lazy",
                    onError: ()=>setImgError(true)
                }, void 0, false, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-28 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white/40 text-2xl font-bold",
                    children: "Streamed"
                }, void 0, false, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-2 left-2",
                    children: match.status && match.status.toLowerCase() === "live" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-red-600 text-white text-xs font-bold px-2 py-1 rounded",
                        children: "LIVE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/page.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 flex-1 flex flex-col justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2 mb-1",
                            children: [
                                homeBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "".concat(API_BASE, "/images/badge/").concat(homeBadge, ".webp"),
                                    alt: homeName,
                                    className: "w-8 h-8 object-contain rounded-full bg-white",
                                    loading: "lazy",
                                    onError: (e)=>e.currentTarget.style.display = 'none'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/live-sports/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-semibold text-sm",
                                    children: homeName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/live-sports/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold mx-1",
                                    children: "vs"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/live-sports/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-semibold text-sm",
                                    children: awayName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/live-sports/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                awayBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "".concat(API_BASE, "/images/badge/").concat(awayBadge, ".webp"),
                                    alt: awayName,
                                    className: "w-8 h-8 object-contain rounded-full bg-white",
                                    loading: "lazy",
                                    onError: (e)=>e.currentTarget.style.display = 'none'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/live-sports/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-bold text-base text-white truncate mb-1",
                            title: match.title,
                            children: match.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-400 text-xs mb-1",
                            children: formatDate(match.date)
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500 text-xs",
                            children: match.category
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-sports/page.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    };
    _s1(MatchCard, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
    // Carousel for a section
    const SectionCarousel = (param)=>{
        let { title, matches, sectionId } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            ref: (el)=>{
                sectionRefs.current[sectionId] = el;
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-3 text-white drop-shadow-lg",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 102,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent",
                    children: matches.map((match)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatchCard, {
                            match: match
                        }, match.id, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 104,
                            columnNumber: 33
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/live-sports/page.tsx",
                    lineNumber: 103,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-sports/page.tsx",
            lineNumber: 101,
            columnNumber: 5
        }, this);
    };
    // Sticky sports selector
    const scrollToSection = (sportId)=>{
        const el = sectionRefs.current[sportId];
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 py-8 mt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-40 bg-[#18181b] py-3 mb-6 flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent border-b border-[#232329]",
                children: SPORT_ORDER.map((sportId)=>{
                    const sport = sports.find((s)=>s.id === sportId);
                    if (!sport) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex flex-col items-center px-4 py-2 rounded-lg bg-[#232329] text-white font-semibold hover:bg-cyan-900 transition min-w-[90px]",
                        onClick: ()=>scrollToSection(sport.id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: sport.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 131,
                            columnNumber: 15
                        }, this)
                    }, sport.id, false, {
                        fileName: "[project]/src/app/live-sports/page.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/live-sports/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-extrabold text-white mb-8 drop-shadow-lg",
                children: "Live Sports"
            }, void 0, false, {
                fileName: "[project]/src/app/live-sports/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-lg",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/live-sports/page.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    popularLive.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCarousel, {
                        title: "Popular Live",
                        matches: popularLive,
                        sectionId: "popular-live"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-sports/page.tsx",
                        lineNumber: 141,
                        columnNumber: 38
                    }, this),
                    SPORT_ORDER.map((sportId)=>{
                        const sport = sports.find((s)=>s.id === sportId);
                        if (!sport || !matchesBySport[sportId] || matchesBySport[sportId].length === 0) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCarousel, {
                            title: "Popular ".concat(sport.name),
                            matches: matchesBySport[sportId],
                            sectionId: sportId
                        }, sportId, false, {
                            fileName: "[project]/src/app/live-sports/page.tsx",
                            lineNumber: 145,
                            columnNumber: 20
                        }, this);
                    })
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/live-sports/page.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(LiveSportsPage, "2xKiSk9evUPAlrWC1HMXddmrVYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LiveSportsPage;
var _c;
__turbopack_context__.k.register(_c, "LiveSportsPage");
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

//# sourceMappingURL=_f7d3e4b5._.js.map