module.exports = {

"[project]/src/app/watch/[type]/[id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>WatchPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "1070730380f5fee0d87cf0382670b255";
const TMDB_BASE = "https://api.themoviedb.org/3";
const CONSUMET_BASE = "https://api.consumet.org/anime/enime";
function WatchPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    // Helper function to map popular anime MyAnimeList IDs to TMDB IDs
    const mapAnimeToTMDB = (malId)=>{
        const animeMap = {
            '16498': 1429,
            '38000': 85937,
            '31964': 65930,
            '21': 37854,
            '20': 46298,
            '1': 1399,
            '269': 1425,
            '11061': 46225,
            '28851': 37165,
            '1530': 1399,
            '1575': 1399,
            '813': 1399
        };
        return animeMap[malId] || null;
    };
    // All hooks must be called before any early returns
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('embedsu');
    const [sourcesList, setSourcesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [autoSwitch, setAutoSwitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [videoErrorCount, setVideoErrorCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showWatchLater, setShowWatchLater] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showContextMenu, setShowContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contextMenuPos, setContextMenuPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [seasons, setSeasons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [episodes, setEpisodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [episodeList, setEpisodeList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSeason, setSelectedSeason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedEpisode, setSelectedEpisode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [watchLater, setWatchLater] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [similar, setSimilar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [similarLoading, setSimilarLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Safely extract type and id as strings
    const type = typeof params.type === 'string' ? params.type : Array.isArray(params.type) ? params.type[0] : '';
    const id = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : '';
    // Debug logging
    console.log('Watch page params:', {
        type,
        id,
        params
    });
    // Fetch sources.mjs dynamically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __turbopack_context__.r("[project]/src/sources.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then((mod)=>{
            let sources = mod.availableSources || [];
            // Always put multiembed first if available
            const multiembedIdx = sources.findIndex((s)=>s.id === 'multiembed');
            if (multiembedIdx > -1) {
                const [multiembed] = sources.splice(multiembedIdx, 1);
                sources = [
                    multiembed,
                    ...sources
                ];
            }
            setSourcesList(sources);
            // Set default source to multiembed if available
            if (sources.length > 0) {
                setSource(sources[0].id);
            }
        });
    }, []);
    // Fetch content details from TMDB or Cosmos API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!id || !type) return;
        async function fetchContent() {
            setLoading(true);
            let contentData = null;
            try {
                console.log(`Fetching ${type} with ID: ${id}`);
                if (type === 'movie') {
                    const res = await fetch(`${TMDB_BASE}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits,similar`);
                    if (res.ok) {
                        contentData = await res.json();
                        console.log('Movie data:', contentData);
                    } else {
                        console.log('Movie fetch failed:', res.status, res.statusText);
                    }
                } else if (type === 'tv') {
                    const res = await fetch(`${TMDB_BASE}/tv/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits,similar`);
                    if (res.ok) {
                        contentData = await res.json();
                        console.log('TV data:', contentData);
                    } else {
                        console.log('TV fetch failed:', res.status, res.statusText);
                    }
                } else if (type === 'anime') {
                    // Remove anime-specific logic. If an anime is loaded, treat as not found or fallback to movie/TV logic.
                    setContent(null);
                }
                setContent(contentData);
                // Set seasons/episodes for TV and Anime
                if ((type === 'tv' || type === 'anime') && contentData && contentData.number_of_seasons) {
                    setSeasons(Array.from({
                        length: contentData.number_of_seasons
                    }, (_, i)=>i + 1));
                    setSelectedSeason(1);
                } else {
                    setSeasons([]);
                }
            } catch (error) {
                console.error('Error fetching content:', error);
            }
            setLoading(false);
        }
        fetchContent();
    }, [
        id,
        type
    ]);
    // Fetch episodes for selected season (TV and Anime)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!type || !content || !selectedSeason) return;
        async function fetchEpisodes() {
            if (type === 'tv' && content && selectedSeason) {
                // TV shows - fetch from TMDB
                const res = await fetch(`${TMDB_BASE}/tv/${id}/season/${selectedSeason}?api_key=${TMDB_API_KEY}`);
                if (res.ok) {
                    const data = await res.json();
                    setEpisodeList(data.episodes || []);
                    setSelectedEpisode(1);
                }
            } else if (type === 'anime' && content) {
                // Anime - handle based on anime type
                if (content.anime_type === 'Movie') {
                    // Anime movies have 1 episode
                    setEpisodes([
                        1
                    ]);
                    setEpisodeList([]);
                    setSelectedEpisode(1);
                } else {
                    // Anime TV series - use total episodes or default to 12
                    const totalEpisodes = content.total_episodes || 12;
                    setEpisodes(Array.from({
                        length: totalEpisodes
                    }, (_, i)=>i + 1));
                    setEpisodeList([]);
                    setSelectedEpisode(1);
                }
            } else {
                setEpisodes([]);
                setEpisodeList([]);
            }
        }
        fetchEpisodes();
    }, [
        type,
        content,
        selectedSeason,
        id
    ]);
    // Set video embed URL
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!content || sourcesList.length === 0 || !type || !id) return;
        const src = sourcesList.find((s)=>s.id === source) || sourcesList[0];
        let url = '';
        if (type === 'movie') {
            url = src.urls.movie.replace('{id}', id);
        } else if (type === 'tv') {
            url = src.urls.tv.replace('{id}', id).replace('{season}', String(selectedSeason)).replace('{episode}', String(selectedEpisode));
        } else if (type === 'anime') {
            // For anime, try to find TMDB equivalent or use anime-specific sources
            if (content.tmdb_id) {
                // If we have a TMDB ID, use it for streaming
                url = src.urls.tv.replace('{id}', content.tmdb_id.toString()).replace('{season}', String(selectedSeason)).replace('{episode}', String(selectedEpisode));
            } else {
                // Fallback: use MyAnimeList ID with anime-specific streaming sources
                // Try to find an anime-compatible source
                const animeSource = sourcesList.find((s)=>s.id === 'vidsrccc') || sourcesList[0];
                if (animeSource) {
                    // Use a different approach for anime - try to map to TMDB anime
                    const tmdbAnimeId = mapAnimeToTMDB(id);
                    if (tmdbAnimeId) {
                        url = animeSource.urls.tv.replace('{id}', tmdbAnimeId.toString()).replace('{season}', String(selectedSeason)).replace('{episode}', String(selectedEpisode));
                    } else {
                        // Final fallback: use the MyAnimeList ID directly (some sources might work)
                        url = animeSource.urls.tv.replace('{id}', id).replace('{season}', String(selectedSeason)).replace('{episode}', String(selectedEpisode));
                    }
                }
            }
        }
        setVideoUrl(url);
        setVideoErrorCount(0); // Reset error count on source change
    }, [
        content,
        type,
        source,
        sourcesList,
        selectedSeason,
        selectedEpisode,
        id
    ]);
    // Fetch similar content
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!content || !type || !id) return;
        async function fetchSimilar() {
            setSimilarLoading(true);
            let results = [];
            if (type === 'movie') {
                const res = await fetch(`${TMDB_BASE}/movie/${id}/similar?api_key=${TMDB_API_KEY}`);
                if (res.ok) {
                    const data = await res.json();
                    results = data.results || [];
                }
            } else if (type === 'tv') {
                const res = await fetch(`${TMDB_BASE}/tv/${id}/similar?api_key=${TMDB_API_KEY}`);
                if (res.ok) {
                    const data = await res.json();
                    results = data.results || [];
                }
            } else if (type === 'anime') {
                // Consumet Enime API - try to get recommendations or search
                try {
                    if (content && content.title) {
                        console.log('Fetching anime recommendations from Enime...');
                        const res = await fetch(`${CONSUMET_BASE}/search?query=${encodeURIComponent(content.title)}`);
                        if (res.ok) {
                            const data = await res.json();
                            console.log('Enime recommendations received:', data.results?.length || 0, 'items');
                            // Transform Consumet search results
                            results = (data.results || []).map((anime)=>({
                                    id: anime.id,
                                    title: anime.title,
                                    name: anime.title,
                                    description: anime.description,
                                    overview: anime.description,
                                    poster_path: anime.image,
                                    release_date: anime.releaseDate,
                                    vote_average: anime.rating
                                }));
                        }
                    }
                } catch (error) {
                    console.error('Error fetching anime recommendations:', error);
                }
            }
            setSimilar(results.slice(0, 12));
            setSimilarLoading(false);
        }
        fetchSimilar();
    }, [
        type,
        id,
        content
    ]);
    // Watch Later: load from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem('watchLater');
        if (stored) setWatchLater(JSON.parse(stored));
    }, []);
    // Watch Later: save to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem('watchLater', JSON.stringify(watchLater));
    }, [
        watchLater
    ]);
    // Add a fallback mechanism to try different content types if the current one fails
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!content && !loading && type && id) {
            console.log(`Content not found for ${type}/${id}, trying fallback...`);
            // Try alternative content types if the current one failed
            const fallbackTypes = type === 'tv' ? [
                'movie'
            ] : type === 'movie' ? [
                'tv'
            ] : [];
            const tryFallback = async ()=>{
                for (const fallbackType of fallbackTypes){
                    try {
                        console.log(`Trying fallback to ${fallbackType}...`);
                        const res = await fetch(`${TMDB_BASE}/${fallbackType}/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits,similar`);
                        if (res.ok) {
                            const fallbackData = await res.json();
                            console.log(`Fallback ${fallbackType} data found:`, fallbackData);
                            setContent(fallbackData);
                            // Update the URL to reflect the correct type
                            window.history.replaceState(null, '', `/watch/${fallbackType}/${id}`);
                            break;
                        }
                    } catch (error) {
                        console.log(`Fallback ${fallbackType} failed:`, error);
                    }
                }
            };
            tryFallback();
        }
    }, [
        content,
        loading,
        type,
        id
    ]);
    // If type or id is missing, show an error or redirect
    if (!type || !id) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-lg text-red-500",
            children: "Invalid URL: missing type or id."
        }, void 0, false, {
            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
            lineNumber: 320,
            columnNumber: 12
        }, this);
    }
    // Watch Later helpers
    const isInWatchLater = ()=>watchLater.some((item)=>item.id === id && item.type === type);
    const handleWatchLater = ()=>{
        if (!content) return;
        if (isInWatchLater()) {
            setWatchLater(watchLater.filter((item)=>!(item.id === id && (typeof item.type === 'string' || typeof item.type === 'number') && item.type === type)));
        } else {
            setWatchLater([
                ...watchLater,
                {
                    ...content,
                    id: id,
                    type: String(type)
                }
            ]);
        }
    };
    // Context menu handler
    const handleContextMenu = (e)=>{
        e.preventDefault();
        setShowContextMenu(true);
        setContextMenuPos({
            x: e.clientX,
            y: e.clientY
        });
    };
    const closeContextMenu = ()=>setShowContextMenu(false);
    // Context menu actions
    const handleCopy = (text, label)=>{
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(()=>setCopied(null), 1200);
        closeContextMenu();
    };
    // UI polish: glassmorphic shadow, border, and hover for cards
    const glassCard = "min-w-[180px] max-w-[180px] rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-black/20 shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition cursor-pointer";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 py-8 mt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-3xl overflow-hidden mb-8 shadow-2xl border border-white/20 dark:border-black/20 backdrop-blur-2xl bg-white/10 dark:bg-black/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-video w-full bg-black/80 flex items-center justify-center",
                    onContextMenu: handleContextMenu,
                    children: videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: videoUrl,
                        allowFullScreen: true,
                        className: "w-full h-full rounded-3xl border-none",
                        style: {
                            minHeight: 320
                        },
                        onError: ()=>{
                            if (autoSwitch && videoErrorCount < sourcesList.length - 1) {
                                // Try next source
                                const currentIdx = sourcesList.findIndex((s)=>s.id === source);
                                const nextIdx = (currentIdx + 1) % sourcesList.length;
                                setSource(sourcesList[nextIdx].id);
                                setVideoErrorCount(videoErrorCount + 1);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 368,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/60",
                        children: "Player loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 384,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl glass-card mb-8 p-6",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/70",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                    lineNumber: 391,
                    columnNumber: 11
                }, this) : content ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-extrabold text-white drop-shadow-lg mb-2",
                            children: content.title || content.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4 items-center mb-2",
                            children: [
                                content.release_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/80 font-semibold",
                                    children: (content.release_date || content.first_air_date || '').slice(0, 4)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                    lineNumber: 396,
                                    columnNumber: 40
                                }, this),
                                content.vote_average && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-yellow-400 font-bold",
                                    children: [
                                        "⭐ ",
                                        content.vote_average.toFixed(1)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                    lineNumber: 397,
                                    columnNumber: 40
                                }, this),
                                content.genres && content.genres.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 rounded-full bg-white/20 text-white/80 text-xs font-medium",
                                        children: g.name
                                    }, g.id, false, {
                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-white/90 max-w-xl drop-shadow mb-2",
                            children: content.overview || content.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this),
                        (()=>{
                            const credits = content.credits;
                            if (credits && Array.isArray(credits.cast) && credits.cast.length > 0) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mb-3",
                                            children: "Cast"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent",
                                            children: credits.cast.slice(0, 15).map((actor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center min-w-[96px] max-w-[96px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-20 h-20 rounded-full overflow-hidden bg-gray-700 mb-2",
                                                            children: actor.profile_path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: `https://image.tmdb.org/t/p/w185${actor.profile_path}`,
                                                                alt: actor.name,
                                                                width: 80,
                                                                height: 80,
                                                                className: "object-cover w-full h-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                                lineNumber: 415,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full flex items-center justify-center text-white/40 text-2xl",
                                                                children: "?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white text-xs font-semibold text-center truncate w-full",
                                                            children: actor.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-400 text-xs text-center truncate w-full",
                                                            children: actor.character
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, actor.cast_id || actor.credit_id, true, {
                                                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                            lineNumber: 410,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                    lineNumber: 408,
                                    columnNumber: 19
                                }, this);
                            }
                            return null;
                        })()
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/70",
                    children: "Not found."
                }, void 0, false, {
                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                    lineNumber: 438,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 mb-8 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 w-full mb-2",
                        children: sourcesList.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `px-4 py-2 rounded-full font-semibold transition border text-sm min-w-[110px] text-center whitespace-nowrap
                ${source === s.id ? 'bg-purple-600 text-white border-purple-400 shadow' : 'bg-[#232329] text-white border-[#232329] hover:bg-cyan-900'}`,
                                onClick: ()=>setSource(s.id),
                                children: s.name
                            }, s.id, false, {
                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                lineNumber: 446,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-white font-semibold cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: autoSwitch,
                                onChange: ()=>setAutoSwitch((v)=>!v),
                                className: "accent-cyan-500 w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this),
                            "Auto Switch Source"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this),
                    type === 'tv' && seasons.length > 0 && content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent",
                                children: seasons.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `px-4 py-2 rounded-lg font-semibold transition border ${selectedSeason === s ? 'bg-cyan-700 text-white border-cyan-400' : 'bg-[#232329] text-white border-[#232329] hover:bg-cyan-900'}`,
                                        onClick: ()=>setSelectedSeason(s),
                                        children: [
                                            "Season ",
                                            s
                                        ]
                                    }, s, true, {
                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2",
                                children: episodeList.length > 0 ? episodeList.map((ep, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `flex flex-col items-start rounded-xl border transition p-0 overflow-hidden shadow-md ${selectedEpisode === ep.episode_number ? 'border-purple-500 ring-2 ring-purple-400' : 'border-[#232329] hover:ring-2 hover:ring-cyan-400'}`,
                                        onClick: ()=>setSelectedEpisode(ep.episode_number),
                                        style: {
                                            background: '#232329'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full aspect-video bg-gray-700",
                                                children: [
                                                    ep.still_path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: `https://image.tmdb.org/t/p/w500${ep.still_path}`,
                                                        alt: ep.name || `Episode ${ep.episode_number}`,
                                                        fill: true,
                                                        className: "object-cover w-full h-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full flex items-center justify-center text-white/40 text-lg",
                                                        children: "No Image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded",
                                                        children: [
                                                            "Episode ",
                                                            ep.episode_number
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 w-full flex-1 flex flex-col items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base text-white font-bold mb-1 truncate w-full",
                                                        children: ep.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-300 line-clamp-2 w-full",
                                                        children: ep.overview
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                lineNumber: 504,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, ep.id || idx, true, {
                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                        lineNumber: 485,
                                        columnNumber: 21
                                    }, this)) : episodes.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `flex flex-col items-start rounded-xl border transition p-0 overflow-hidden shadow-md ${selectedEpisode === e ? 'border-purple-500 ring-2 ring-purple-400' : 'border-[#232329] hover:ring-2 hover:ring-cyan-400'}`,
                                        onClick: ()=>setSelectedEpisode(e),
                                        style: {
                                            background: '#232329'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full aspect-video bg-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full flex items-center justify-center text-white/40 text-lg",
                                                        children: "No Image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded",
                                                        children: [
                                                            "Episode ",
                                                            e
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                lineNumber: 517,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 w-full flex-1 flex flex-col items-start",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-base text-white font-bold mb-1 truncate w-full",
                                                    children: [
                                                        "Episode ",
                                                        e
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                                lineNumber: 521,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, e, true, {
                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                lineNumber: 482,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 468,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `glass-toggle px-4 py-2 rounded-lg border border-white/20 dark:border-black/20 backdrop-blur-md bg-white/10 dark:bg-black/20 text-white font-semibold ${isInWatchLater() ? 'bg-purple-600' : ''}`,
                        onClick: handleWatchLater,
                        children: isInWatchLater() ? 'Remove from Watch Later' : 'Add to Watch Later'
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "glass-toggle px-4 py-2 rounded-lg border border-white/20 dark:border-black/20 backdrop-blur-md bg-white/10 dark:bg-black/20 text-white font-semibold",
                        onClick: ()=>setShowWatchLater(true),
                        children: "Show Watch Later"
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-3 text-white drop-shadow-lg",
                        children: "Similar Content"
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 545,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent",
                        children: similarLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white/60 py-8",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                            lineNumber: 548,
                            columnNumber: 13
                        }, this) : similar.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white/60 py-8",
                            children: "No similar content found."
                        }, void 0, false, {
                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                            lineNumber: 550,
                            columnNumber: 13
                        }, this) : similar.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: glassCard,
                                onClick: ()=>{
                                    const itemType = item.media_type || item.type || 'movie';
                                    router.push(`/watch/${itemType}/${item.id}`);
                                },
                                title: item.title || item.name,
                                children: [
                                    item.poster_path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: `https://image.tmdb.org/t/p/w300${item.poster_path || ''}`,
                                        alt: item.title || item.name || '',
                                        width: 180,
                                        height: 260,
                                        className: "object-cover w-full h-[260px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[260px] flex items-center justify-center text-white/40 bg-black/30",
                                        children: "No Image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 text-white font-semibold text-center bg-gradient-to-t from-black/60 to-transparent",
                                        children: item.title || item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                        lineNumber: 573,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-yellow-400 text-xs text-center pb-2",
                                        children: [
                                            "⭐ ",
                                            item.vote_average?.toFixed(1) || 'N/A'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${String(item.id ?? '')}-${String(item?.media_type ?? type)}`, true, {
                                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                lineNumber: 553,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                lineNumber: 544,
                columnNumber: 7
            }, this),
            showWatchLater && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/70 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-xl p-8 shadow-2xl border border-white/20 max-w-lg w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-4 text-white",
                            children: "Watch Later List"
                        }, void 0, false, {
                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                            lineNumber: 586,
                            columnNumber: 13
                        }, this),
                        watchLater.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white/70 text-center py-8",
                            children: "No items in your watch later list."
                        }, void 0, false, {
                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                            lineNumber: 588,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: watchLater.map((item)=>{
                                const idStr = typeof item.id === 'string' || typeof item.id === 'number' ? String(item.id) : '';
                                const typeStr = typeof item.type === 'string' || typeof item.type === 'number' ? String(item.type) : '';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: glassCard + " p-2 flex flex-col items-center",
                                    children: [
                                        item.poster_path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: `https://image.tmdb.org/t/p/w300${item.poster_path || ''}`,
                                            alt: item.title || '',
                                            width: 80,
                                            height: 120,
                                            className: "rounded mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                            lineNumber: 597,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white text-sm font-semibold text-center mb-1",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-yellow-400 text-xs",
                                            children: [
                                                "⭐ ",
                                                item.vote_average?.toFixed(1) || 'N/A'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "mt-2 px-2 py-1 rounded bg-purple-600 text-white text-xs",
                                            onClick: ()=>{
                                                setWatchLater(watchLater.filter((w)=>!(w.id === item.id && (typeof w.type === 'string' || typeof w.type === 'number') && w.type === item.type)));
                                            },
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, `${idStr}-${typeStr}`, true, {
                                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                                    lineNumber: 595,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                            lineNumber: 590,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowWatchLater(false),
                            className: "mt-6 px-4 py-2 rounded-lg bg-purple-600 text-white w-full",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                            lineNumber: 614,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                    lineNumber: 585,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                lineNumber: 584,
                columnNumber: 9
            }, this),
            showContextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    left: contextMenuPos.x,
                    top: contextMenuPos.y,
                    position: 'fixed',
                    zIndex: 100
                },
                className: "rounded-xl bg-white/20 dark:bg-black/30 backdrop-blur-xl shadow-lg border border-white/20 p-4 min-w-[180px]",
                onMouseLeave: closeContextMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "block w-full text-left text-white py-1 hover:bg-white/10 rounded",
                        onClick: ()=>handleCopy(content?.title || content?.name || '', 'Title'),
                        children: "Copy Title"
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "block w-full text-left text-white py-1 hover:bg-white/10 rounded",
                        onClick: ()=>handleCopy(id, 'TMDB ID'),
                        children: "Copy TMDB ID"
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 631,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "block w-full text-left text-white py-1 hover:bg-white/10 rounded",
                        onClick: ()=>{
                            handleWatchLater();
                            closeContextMenu();
                        },
                        children: isInWatchLater() ? 'Remove from Watch Later' : 'Add to Watch Later'
                    }, void 0, false, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 637,
                        columnNumber: 11
                    }, this),
                    copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-green-300 mt-2",
                        children: [
                            "Copied ",
                            copied,
                            "!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                        lineNumber: 643,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
                lineNumber: 620,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/watch/[type]/[id]/page.tsx",
        lineNumber: 362,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_04c5ea8b._.js.map