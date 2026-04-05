(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/_Components/Slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const images = [
    {
        id: 1,
        img: "/Slider2.jpg",
        title: "Discipline–Effort–Succès : le succès au bout de l’effort dans la discipline."
    },
    {
        id: 2,
        img: "/Slider1.jpg",
        title: "On n’est pas premier par hasard !"
    }
];
function Promoteur() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Slider automatique
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Promoteur.useEffect": ()=>{
            const interval = setInterval({
                "Promoteur.useEffect.interval": ()=>{
                    setIndex({
                        "Promoteur.useEffect.interval": (prev)=>(prev + 1) % images.length
                    }["Promoteur.useEffect.interval"]);
                }
            }["Promoteur.useEffect.interval"], 5000); // change toutes les 4s
            return ({
                "Promoteur.useEffect": ()=>clearInterval(interval)
            })["Promoteur.useEffect"];
        }
    }["Promoteur.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-125 overflow-hidden relative",
        children: images.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`,
                style: {
                    backgroundImage: `url(${item.img})`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/40 h-full w-full flex items-center p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-2xl md:text-3xl max-w-xl text-right",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/_Components/Slider.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/_Components/Slider.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, item.id, false, {
                fileName: "[project]/_Components/Slider.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/_Components/Slider.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Promoteur, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = Promoteur;
const __TURBOPACK__default__export__ = Promoteur;
var _c;
__turbopack_context__.k.register(_c, "Promoteur");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_Components_Slider_tsx_7e4470ac._.js.map