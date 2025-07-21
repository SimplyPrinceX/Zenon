(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/providers/[provider]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ProviderPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const providers = [
    {
        name: "Apple TV",
        slug: "appletv",
        logo: "/providers/appletv.png",
        color: "bg-gradient-to-r from-[#a8edea] to-[#fed6e3]"
    },
    {
        name: "HBO Max",
        slug: "hbomax",
        logo: "/providers/hbomax.png",
        color: "bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb]"
    },
    {
        name: "Disney+",
        slug: "disney",
        logo: "/providers/disney.png",
        color: "bg-gradient-to-r from-[#43cea2] to-[#185a9d]"
    },
    {
        name: "Peacock",
        slug: "peacock",
        logo: "/providers/peacock.png",
        color: "bg-gradient-to-r from-[#f7971e] to-[#ffd200]"
    },
    {
        name: "Prime Video",
        slug: "primevideo",
        logo: "/providers/primevideo.png",
        color: "bg-gradient-to-r from-[#1e3c72] to-[#2a5298]"
    }
];
const movies = [
    {
        title: "Dune: Part Two",
        image: "/trending/dune2.jpg",
        provider: "hbomax"
    },
    {
        title: "Godzilla x Kong",
        image: "/trending/godzillakong.jpg",
        provider: "hbomax"
    },
    {
        title: "Oppenheimer",
        image: "/trending/oppenheimer.jpg",
        provider: "peacock"
    },
    {
        title: "Barbie",
        image: "/trending/barbie.jpg",
        provider: "peacock"
    },
    {
        title: "John Wick 4",
        image: "/trending/johnwick4.jpg",
        provider: "primevideo"
    },
    {
        title: "Jawan",
        image: "/indian/jawan.jpg",
        provider: "appletv"
    },
    {
        title: "Pathaan",
        image: "/indian/pathaan.jpg",
        provider: "appletv"
    },
    {
        title: "RRR",
        image: "/indian/rrr.jpg",
        provider: "disney"
    },
    {
        title: "Pushpa",
        image: "/indian/pushpa.jpg",
        provider: "disney"
    },
    {
        title: "KGF Chapter 2",
        image: "/indian/kgf2.jpg",
        provider: "primevideo"
    }
];
function ProviderPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const provider = providers.find((p)=>p.slug === params.provider);
    if (!provider) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    const filtered = movies.filter((m)=>m.provider === provider.slug);
    const trending = filtered[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6",
        children: [
            trending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-3xl overflow-hidden mb-8 glass-card ".concat(provider.color),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: trending.image,
                        alt: trending.title,
                        width: 1200,
                        height: 400,
                        className: "w-full h-[220px] sm:h-[320px] object-cover object-center",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/providers/[provider]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/providers/[provider]/page.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 bottom-0 p-6 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: provider.logo,
                                alt: provider.name,
                                width: 48,
                                height: 48,
                                className: "rounded-full border border-white/30"
                            }, void 0, false, {
                                fileName: "[project]/src/app/providers/[provider]/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg mb-1",
                                        children: provider.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/providers/[provider]/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/90 max-w-xl drop-shadow",
                                        children: [
                                            "Trending: ",
                                            trending.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/providers/[provider]/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/providers/[provider]/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/providers/[provider]/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/providers/[provider]/page.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-white drop-shadow-lg",
                children: "All Movies & Shows"
            }, void 0, false, {
                fileName: "[project]/src/app/providers/[provider]/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5",
                children: filtered.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: movie.image,
                                alt: movie.title,
                                width: 220,
                                height: 320,
                                className: "object-cover w-full h-[220px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/providers/[provider]/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 text-white font-semibold text-center bg-gradient-to-t from-black/60 to-transparent",
                                children: movie.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/providers/[provider]/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, movie.title, true, {
                        fileName: "[project]/src/app/providers/[provider]/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/providers/[provider]/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/providers/[provider]/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ProviderPage, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProviderPage;
var _c;
__turbopack_context__.k.register(_c, "ProviderPage");
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

//# sourceMappingURL=_04f53bee._.js.map