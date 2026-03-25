import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, ref, useSSRContext } from 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/vue/server-renderer/index.mjs';
import { Home, ChevronRight, Target, Lightbulb, Rocket, Sparkles, FileText, Tag, Clock, Building2, MapPin, Check, Copy, User, Share2, ChevronDown, Activity } from 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './v3-wF-usxdD.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/h3/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/destr/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/hookable/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/ohash/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/klona/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/defu/dist/defu.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/scule/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/unctx/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/pathe/dist/index.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/unhead/dist/server.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/devalue/index.js';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "StakeholdersCard",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const activeTab = ref("inventors");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border" }, _attrs))} data-v-b4f12cff><div class="flex items-center gap-6 border-b border-slate-100 mb-6" data-v-b4f12cff><button class="${ssrRenderClass([unref(activeTab) === "inventors" ? "text-blue-600" : "text-slate-500 hover:text-slate-800", "pb-3 text-sm font-bold transition-colors relative"])}" data-v-b4f12cff> \u53D1\u660E\u4EBA `);
      if (unref(activeTab) === "inventors") {
        _push(`<div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full tab-indicator" data-v-b4f12cff></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button class="${ssrRenderClass([unref(activeTab) === "applicants" ? "text-blue-600" : "text-slate-500 hover:text-slate-800", "pb-3 text-sm font-bold transition-colors relative"])}" data-v-b4f12cff> \u7533\u8BF7\u4EBA `);
      if (unref(activeTab) === "applicants") {
        _push(`<div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full tab-indicator" data-v-b4f12cff></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div>`);
      if (unref(activeTab) === "inventors") {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-b4f12cff><!--[-->`);
        ssrRenderList(__props.data.inventors, (inv, idx) => {
          _push(`<div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5" data-v-b4f12cff><div class="flex items-center gap-4 mb-3" data-v-b4f12cff><div class="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform shrink-0 avatar-glow" data-v-b4f12cff>${ssrInterpolate(inv.name[0])}</div><div class="min-w-0" data-v-b4f12cff><div class="font-bold text-slate-900 truncate" data-v-b4f12cff>${ssrInterpolate(inv.name)}</div><div class="text-xs text-slate-500 truncate" data-v-b4f12cff>${ssrInterpolate(inv.org)}</div></div></div><div class="flex flex-wrap gap-2" data-v-b4f12cff><!--[-->`);
          ssrRenderList(inv.expertise, (exp) => {
            _push(`<span class="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-md group-hover:border-blue-200 group-hover:text-blue-700 transition-colors" data-v-b4f12cff>${ssrInterpolate(exp)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-b4f12cff><!--[-->`);
        ssrRenderList(__props.data.applicants, (app, idx) => {
          _push(`<div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5" data-v-b4f12cff><div class="flex items-center gap-4 mb-3" data-v-b4f12cff><div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0 avatar-glow" data-v-b4f12cff>`);
          _push(ssrRenderComponent(unref(Building2), { class: "w-6 h-6" }, null, _parent));
          _push(`</div><div class="min-w-0" data-v-b4f12cff><div class="font-bold text-slate-900 truncate" data-v-b4f12cff>${ssrInterpolate(app.name)}</div><div class="text-xs text-slate-500 truncate" data-v-b4f12cff>${ssrInterpolate(app.type)} \xB7 ${ssrInterpolate(app.patents)} \u9879\u4E13\u5229</div></div></div><div class="flex flex-wrap gap-2" data-v-b4f12cff><!--[-->`);
          ssrRenderList(app.expertise, (exp) => {
            _push(`<span class="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-md group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors" data-v-b4f12cff>${ssrInterpolate(exp)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StakeholdersCard.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b4f12cff"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AbstractCard",
  __ssrInlineRender: true,
  props: {
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border" }, _attrs))}><div class="flex items-center gap-2 mb-4">`);
      _push(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-blue-600" }, null, _parent));
      _push(`<h3 class="text-lg font-bold text-slate-900">\u6458\u8981</h3></div><p class="text-slate-700 leading-relaxed text-sm">${ssrInterpolate(__props.text)}</p></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AbstractCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ContentTabs",
  __ssrInlineRender: true,
  props: {
    claims: {},
    description: {}
  },
  setup(__props) {
    const activeTab = ref("claims");
    const expanded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-gradient-border" }, _attrs))} data-v-f5c52855><div class="flex border-b border-slate-100" data-v-f5c52855><button class="${ssrRenderClass([unref(activeTab) === "claims" ? "text-blue-600" : "text-slate-500 hover:text-slate-700", "px-6 py-4 font-medium text-sm transition-colors relative"])}" data-v-f5c52855> \u6743\u5229\u8981\u6C42 `);
      if (unref(activeTab) === "claims") {
        _push(`<div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator" data-v-f5c52855></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button class="${ssrRenderClass([unref(activeTab) === "description" ? "text-blue-600" : "text-slate-500 hover:text-slate-700", "px-6 py-4 font-medium text-sm transition-colors relative"])}" data-v-f5c52855> \u8BF4\u660E\u4E66 `);
      if (unref(activeTab) === "description") {
        _push(`<div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator" data-v-f5c52855></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div><div class="relative" data-v-f5c52855><div class="${ssrRenderClass([unref(expanded) ? "max-h-none" : "max-h-[300px]", "p-6 overflow-y-auto custom-scrollbar transition-all duration-300"])}" data-v-f5c52855><div class="whitespace-pre-line text-slate-600 text-sm leading-relaxed" data-v-f5c52855>${ssrInterpolate(unref(activeTab) === "claims" ? __props.claims : __props.description)}</div></div>`);
      if (!unref(expanded)) {
        _push(`<div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" data-v-f5c52855></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="w-full py-3 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 transition-colors flex items-center justify-center gap-1 border-t border-slate-50" data-v-f5c52855><span data-v-f5c52855>${ssrInterpolate(unref(expanded) ? "\u6536\u8D77" : "\u5C55\u5F00\u5168\u6587")}</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: ["w-4 h-4 transition-transform duration-300", { "rotate-180": unref(expanded) }]
      }, null, _parent));
      _push(`</button></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContentTabs.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-f5c52855"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PatentsTabs",
  __ssrInlineRender: true,
  props: {
    cited: {},
    similar: {}
  },
  setup(__props) {
    const activeTab = ref("cited");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-gradient-border" }, _attrs))} data-v-bda8048a><div class="flex border-b border-slate-100" data-v-bda8048a><button class="${ssrRenderClass([unref(activeTab) === "cited" ? "text-blue-600" : "text-slate-500 hover:text-slate-700", "px-6 py-4 font-medium text-sm transition-colors relative"])}" data-v-bda8048a> \u5F15\u7528\u4E13\u5229 `);
      if (unref(activeTab) === "cited") {
        _push(`<div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator" data-v-bda8048a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button class="${ssrRenderClass([unref(activeTab) === "similar" ? "text-blue-600" : "text-slate-500 hover:text-slate-700", "px-6 py-4 font-medium text-sm transition-colors relative"])}" data-v-bda8048a> \u76F8\u4F3C\u4E13\u5229 `);
      if (unref(activeTab) === "similar") {
        _push(`<div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator" data-v-bda8048a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div><div class="p-6 max-h-[400px] overflow-y-auto custom-scrollbar" data-v-bda8048a>`);
      if (unref(activeTab) === "cited") {
        _push(`<div class="space-y-3" data-v-bda8048a><!--[-->`);
        ssrRenderList(__props.cited, (pat, idx) => {
          _push(`<a href="#" class="block p-3 rounded-lg hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200 hover:translate-x-1" data-v-bda8048a><div class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1" data-v-bda8048a>${ssrInterpolate(pat.title)}</div><div class="text-xs text-slate-500 font-mono" data-v-bda8048a>${ssrInterpolate(pat.id)}</div></a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="space-y-3" data-v-bda8048a><!--[-->`);
        ssrRenderList(__props.similar, (pat, idx) => {
          _push(`<a href="#" class="block p-3 rounded-lg hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200" data-v-bda8048a><div class="flex items-center justify-between mb-1" data-v-bda8048a><div class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 flex-1 mr-3" data-v-bda8048a>${ssrInterpolate(pat.title)}</div><span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full shrink-0" data-v-bda8048a>${ssrInterpolate(pat.match)}%</span></div><div class="text-xs text-slate-500 font-mono mb-2" data-v-bda8048a>${ssrInterpolate(pat.id)}</div><div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden" data-v-bda8048a><div class="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full match-bar-fill" style="${ssrRenderStyle({ width: pat.match + "%" })}" data-v-bda8048a></div></div></a>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PatentsTabs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-bda8048a"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "MetaInfo",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border" }, _attrs))}><h3 class="text-lg font-bold text-slate-900 mb-4">\u57FA\u672C\u4FE1\u606F</h3><div class="space-y-4"><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Tag), { class: "w-3 h-3" }, null, _parent));
      _push(` IPC\u5206\u7C7B</span><div class="flex flex-wrap gap-2 mt-1"><!--[-->`);
      ssrRenderList(__props.data.ipc, (item) => {
        _push(`<span class="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-md font-mono flex items-center gap-1.5 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-default"><span class="font-bold">${ssrInterpolate(item.code)}</span><span class="text-slate-500">${ssrInterpolate(item.name)}</span></span>`);
      });
      _push(`<!--]--></div></div><div class="h-px w-full bg-slate-100"></div><div class="grid grid-cols-2 gap-4"><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-3 h-3" }, null, _parent));
      _push(` \u7533\u8BF7\u65E5</span><time${ssrRenderAttr("datetime", __props.data.applicationDate)} class="text-sm font-medium text-slate-900">${ssrInterpolate(__props.data.applicationDate)}</time></div><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-3 h-3" }, null, _parent));
      _push(` \u516C\u5F00\u65E5</span><time${ssrRenderAttr("datetime", __props.data.publicationDate)} class="text-sm font-medium text-slate-900">${ssrInterpolate(__props.data.publicationDate)}</time></div></div><div class="h-px w-full bg-slate-100"></div><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-3 h-3" }, null, _parent));
      _push(` \u4EE3\u7406\u673A\u6784</span><span class="text-sm font-medium text-slate-900">${ssrInterpolate(__props.data.agency)}</span></div><div class="h-px w-full bg-slate-100"></div><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-3 h-3" }, null, _parent));
      _push(` \u7533\u8BF7\u4EBA\u5730\u5740</span><address class="text-sm font-medium text-slate-900 not-italic">${ssrInterpolate(__props.data.applicantAddress)}</address></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MetaInfo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PatentTimeline",
  __ssrInlineRender: true,
  props: {
    timeline: {}
  },
  setup(__props) {
    const lineHeight = ref("0%");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border" }, _attrs))} data-v-412f4003><div class="flex items-center gap-2 mb-6" data-v-412f4003>`);
      _push(ssrRenderComponent(unref(Activity), { class: "w-5 h-5 text-blue-600" }, null, _parent));
      _push(`<h3 class="text-lg font-bold text-slate-900" data-v-412f4003>\u4E13\u5229\u65F6\u95F4\u8F74</h3></div><div class="relative ml-3 space-y-8" data-v-412f4003><div class="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-100" data-v-412f4003><div class="w-full bg-gradient-to-b from-blue-500 to-blue-200 rounded-full timeline-line-fill" style="${ssrRenderStyle({ height: unref(lineHeight) })}" data-v-412f4003></div></div><!--[-->`);
      ssrRenderList(__props.timeline, (item, idx) => {
        _push(`<div class="relative pl-6 group" data-v-412f4003><div class="${ssrRenderClass([idx === 0 ? "border-blue-500 timeline-pulse" : "border-slate-300 group-hover:border-blue-400", "absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 shadow-sm transition-all duration-300 group-hover:scale-125"])}" data-v-412f4003></div><time${ssrRenderAttr("datetime", item.date)} class="${ssrRenderClass([idx === 0 ? "text-blue-600" : "text-slate-500 group-hover:text-blue-600", "text-sm font-bold mb-1 block transition-colors"])}" data-v-412f4003>${ssrInterpolate(item.date)}</time><div class="text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors" data-v-412f4003>${ssrInterpolate(item.event)}</div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PatentTimeline.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-412f4003"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "\u9762\u5305\u5C51",
        class: "mb-6"
      }, _attrs))}><ol class="flex items-center gap-2 text-sm" itemscope itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="/" itemprop="item" class="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Home), { class: "w-3.5 h-3.5" }, null, _parent));
      _push(`<span itemprop="name">\u9996\u9875</span></a><meta itemprop="position" content="1"></li>`);
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3.5 h-3.5 text-slate-300" }, null, _parent));
      _push(`<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="/patents" itemprop="item" class="text-slate-500 hover:text-blue-600 transition-colors"><span itemprop="name">\u79D1\u521B\u5E93</span></a><meta itemprop="position" content="2"></li>`);
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3.5 h-3.5 text-slate-300" }, null, _parent));
      _push(`<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><span itemprop="name" class="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-[400px] inline-block align-bottom">${ssrInterpolate(__props.title)}</span><meta itemprop="position" content="3"></li></ol></nav>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumb.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function useCopyToClipboard() {
  const copied = ref(false);
  let timer = null;
  async function copy(text) {
    await (void 0).clipboard.writeText(text);
    copied.value = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      copied.value = false;
    }, 1500);
  }
  return { copied, copy };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PatentHeader",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { copied } = useCopyToClipboard();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-cd13a265><div class="flex items-center gap-3 mb-4" data-v-cd13a265><span class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 status-pulse" data-v-cd13a265>${ssrInterpolate(__props.data.status)}</span><button class="text-sm font-medium text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1.5 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer group"${ssrRenderAttr("title", unref(copied) ? "\u5DF2\u590D\u5236" : "\u70B9\u51FB\u590D\u5236\u7533\u8BF7\u53F7")} data-v-cd13a265>${ssrInterpolate(__props.data.applicationNumber)} `);
      if (unref(copied)) {
        _push(ssrRenderComponent(unref(Check), { class: "w-3.5 h-3.5 text-emerald-500" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Copy), { class: "w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" }, null, _parent));
      }
      _push(`</button></div><h1 class="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight" data-v-cd13a265>${ssrInterpolate(__props.data.title)}</h1><div class="flex flex-wrap items-center gap-6 text-sm text-slate-600" data-v-cd13a265><div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all" data-v-cd13a265>`);
      _push(ssrRenderComponent(unref(User), { class: "w-4 h-4 text-blue-500" }, null, _parent));
      _push(`<span class="font-medium" data-v-cd13a265>${ssrInterpolate(__props.data.inventors.map((i) => i.name).join(", "))}</span></div><div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all" data-v-cd13a265>`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-4 h-4 text-indigo-500" }, null, _parent));
      _push(`<span class="font-medium" data-v-cd13a265>${ssrInterpolate(__props.data.applicants.map((a) => a.name).join(", "))}</span></div></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PatentHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cd13a265"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ShareButton",
  __ssrInlineRender: true,
  setup(__props) {
    const showToast = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2" }, _attrs))} data-v-535b72fe><button class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 text-xs font-medium rounded-full transition-all hover:shadow-sm active:scale-95 group" data-v-535b72fe>`);
      _push(ssrRenderComponent(unref(Share2), { class: "w-3.5 h-3.5 group-hover:rotate-12 transition-transform" }, null, _parent));
      _push(` \u5206\u4EAB </button>`);
      if (unref(showToast)) {
        _push(`<span class="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full font-medium" data-v-535b72fe> \u94FE\u63A5\u5DF2\u590D\u5236 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShareButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-535b72fe"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AiAssessment",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const cards = [
      { title: "\u89E3\u51B3\u95EE\u9898", icon: Target, content: props.data.aiSummary.problem, gradient: "from-rose-500 to-orange-400", bg: "bg-rose-50/50", border: "border-rose-100", iconColor: "text-rose-600" },
      { title: "\u8FBE\u6210\u6548\u679C", icon: Lightbulb, content: props.data.aiSummary.effect, gradient: "from-amber-400 to-yellow-500", bg: "bg-amber-50/50", border: "border-amber-100", iconColor: "text-amber-600" },
      { title: "\u4E3B\u8981\u7528\u9014", icon: Rocket, content: props.data.aiSummary.application, gradient: "from-emerald-400 to-teal-500", bg: "bg-emerald-50/50", border: "border-emerald-100", iconColor: "text-emerald-600" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-8 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-blue-100 relative overflow-hidden card-gradient-border" }, _attrs))}><div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div><div class="ai-shimmer absolute inset-0 pointer-events-none"></div><div class="relative"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-5 h-5 text-blue-600" }, null, _parent));
      _push(`</div><div><h2 class="text-xl font-bold text-slate-900">\u79D1\u6280\u6210\u679C\u8F6C\u5316\u8BC4\u4F30</h2><p class="text-sm text-slate-500 mt-0.5">\u57FA\u4E8E\u5927\u6A21\u578B\u6DF1\u5EA6\u89E3\u6790\u4E13\u5229\u5546\u4E1A\u4EF7\u503C</p></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(cards, (card, idx) => {
        _push(`<div class="${ssrRenderClass([[card.bg, card.border], "rounded-xl p-5 border relative group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"])}"><div class="${ssrRenderClass([card.gradient, "absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"])}"></div><div class="flex items-center gap-2 mb-3">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(card.icon), {
          class: ["w-5 h-5 transition-transform group-hover:scale-110", card.iconColor]
        }, null), _parent);
        _push(`<h3 class="font-bold text-slate-900">${ssrInterpolate(card.title)}</h3></div><p class="text-sm text-slate-700 leading-relaxed">${ssrInterpolate(card.content)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AiAssessment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const patentData = {
  title: "\u4E00\u79CD\u542B\u6C2E\u6742\u73AF\u5316\u5408\u7269\u7684\u6676\u578B\u3001\u5176\u5236\u5907\u65B9\u6CD5\u53CA\u5176\u5E94\u7528",
  applicationNumber: "CN202310123456.7",
  status: "\u5B9E\u8D28\u5BA1\u67E5",
  applicationDate: "2023-02-15",
  publicationDate: "2023-08-22",
  ipc: [
    { code: "C07D 401/14", name: "\u542B\u6709\u4E09\u4E2A\u6216\u66F4\u591A\u4E2A\u6742\u73AF\u7684\u6742\u73AF\u5316\u5408\u7269" },
    { code: "A61K 31/4439", name: "\u542B\u6709\u5421\u5576\u73AF\u7684\u836F\u7269\u5236\u5242" },
    { code: "A61P 35/00", name: "\u6297\u80BF\u7624\u836F" }
  ],
  agency: "\u5317\u4EAC\u67D0\u67D0\u77E5\u8BC6\u4EA7\u6743\u4EE3\u7406\u6709\u9650\u516C\u53F8",
  applicantAddress: "\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u6E05\u534E\u56ED1\u53F7",
  abstract: "\u672C\u53D1\u660E\u516C\u5F00\u4E86\u4E00\u79CD\u542B\u6C2E\u6742\u73AF\u5316\u5408\u7269\u7684\u6676\u578B\u3001\u5176\u5236\u5907\u65B9\u6CD5\u53CA\u5176\u5E94\u7528\u3002\u8BE5\u6676\u578B\u5177\u6709\u826F\u597D\u7684\u7269\u7406\u5316\u5B66\u7A33\u5B9A\u6027\uFF0C\u6EB6\u89E3\u5EA6\u9AD8\uFF0C\u751F\u7269\u5229\u7528\u5EA6\u597D\uFF0C\u9002\u7528\u4E8E\u5236\u5907\u6CBB\u7597\u80BF\u7624\u7B49\u75BE\u75C5\u7684\u836F\u7269\u3002\u672C\u53D1\u660E\u8FD8\u63D0\u4F9B\u4E86\u8BE5\u6676\u578B\u7684\u5236\u5907\u65B9\u6CD5\uFF0C\u5DE5\u827A\u7B80\u5355\uFF0C\u91CD\u73B0\u6027\u597D\uFF0C\u9002\u5408\u5DE5\u4E1A\u5316\u5927\u751F\u4EA7\u3002",
  aiSummary: {
    problem: "\u73B0\u6709\u6297\u80BF\u7624\u836F\u7269\u5B58\u5728\u6C34\u6EB6\u6027\u5DEE\u3001\u751F\u7269\u5229\u7528\u5EA6\u4F4E\u3001\u7269\u7406\u5316\u5B66\u6027\u8D28\u4E0D\u7A33\u5B9A\u7B49\u95EE\u9898\uFF0C\u5BFC\u81F4\u5236\u5242\u56F0\u96BE\u548C\u4E34\u5E8A\u7597\u6548\u53D7\u9650\u3002",
    effect: "\u663E\u8457\u63D0\u9AD8\u4E86\u5316\u5408\u7269\u7684\u6EB6\u89E3\u5EA6\u548C\u6EB6\u51FA\u901F\u7387\uFF0C\u53E3\u670D\u751F\u7269\u5229\u7528\u5EA6\u63D0\u5347\u7EA63\u500D\uFF1B\u5728\u9AD8\u6E29\u3001\u9AD8\u6E7F\u548C\u5149\u7167\u6761\u4EF6\u4E0B\u4FDD\u6301\u6781\u9AD8\u7684\u6676\u578B\u7A33\u5B9A\u6027\u3002",
    application: "\u53EF\u76F4\u63A5\u7528\u4E8E\u5F00\u53D1\u65B0\u578B\u9776\u5411\u6297\u80BF\u7624\u53E3\u670D\u56FA\u4F53\u5236\u5242\uFF08\u5982\u7247\u5242\u3001\u80F6\u56CA\uFF09\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u975E\u5C0F\u7EC6\u80DE\u80BA\u764C\u548C\u4E73\u817A\u764C\u7684\u9776\u5411\u6CBB\u7597\u836F\u7269\u5F00\u53D1\u3002"
  },
  timeline: [
    { date: "2023-09-10", event: "\u8FDB\u5165\u5B9E\u8D28\u5BA1\u67E5\u9636\u6BB5" },
    { date: "2023-08-22", event: "\u521D\u6B65\u5BA1\u67E5\u5408\u683C\u5E76\u516C\u5F00" },
    { date: "2023-02-15", event: "\u4E13\u5229\u7533\u8BF7" }
  ],
  inventors: [
    { name: "\u6797\u8212\u96C5", org: "\u6E05\u534E\u5927\u5B66", role: "\u7B2C\u4E00\u53D1\u660E\u4EBA", patents: 156, expertise: ["\u534A\u5BFC\u4F53\u5668\u4EF6", "GaN\u7814\u7A76", "\u5C04\u9891\u96C6\u6210\u7535\u8DEF"], match: 98 },
    { name: "\u738B\u5229\u6C11", org: "\u6E05\u534E\u5927\u5B66", role: "\u5171\u540C\u53D1\u660E\u4EBA", patents: 89, expertise: ["\u5FAE\u7535\u5B50", "\u82AF\u7247\u8BBE\u8BA1"], match: 85 },
    { name: "\u6B27\u9633\u6155\u5BB9", org: "\u5317\u4EAC\u67D0\u67D0\u79D1\u6280\u6709\u9650\u516C\u53F8\u7814\u53D1\u4E2D\u5FC3", role: "\u5171\u540C\u53D1\u660E\u4EBA", patents: 42, expertise: ["\u6676\u578B\u836F\u7269\u5F00\u53D1", "\u836F\u7269\u5206\u6790", "\u5236\u5242\u5DE5\u827A\u4F18\u5316"], match: 92 }
  ],
  applicants: [
    { name: "\u6E05\u534E\u5927\u5B66", type: "\u9AD8\u6821", patents: 12500, expertise: ["\u4FE1\u606F\u6280\u672F", "\u6750\u6599\u79D1\u5B66", "\u751F\u7269\u533B\u836F"] },
    { name: "\u5317\u4EAC\u67D0\u67D0\u79D1\u6280\u6709\u9650\u516C\u53F8", type: "\u4F01\u4E1A", patents: 340, expertise: ["\u533B\u836F\u7814\u53D1", "\u521B\u65B0\u836F"] },
    { name: "\u4E0A\u6D77\u67D0\u67D0\u533B\u836F\u79D1\u6280\u53D1\u5C55\u96C6\u56E2\u80A1\u4EFD\u6709\u9650\u516C\u53F8", type: "\u4F01\u4E1A", patents: 120, expertise: ["\u9776\u5411\u836F\u7269", "\u4E34\u5E8A\u7814\u7A76", "\u533B\u836F\u4E2D\u95F4\u4F53\u5408\u6210"] }
  ],
  claims: "1. \u4E00\u79CD\u5F0F(I)\u6240\u793A\u5316\u5408\u7269\u7684\u6676\u578BA\uFF0C\u5176\u7279\u5F81\u5728\u4E8E\uFF0C\u4F7F\u7528Cu-K\u03B1\u8F90\u5C04\uFF0C\u5176X\u5C04\u7EBF\u7C89\u672B\u884D\u5C04\u56FE\u8C31\u57282\u03B8\u89D2\u5EA6\u4E3A...\n\n2. \u6839\u636E\u6743\u5229\u8981\u6C421\u6240\u8FF0\u7684\u6676\u578BA\uFF0C\u5176\u7279\u5F81\u5728\u4E8E...\n\n3. \u4E00\u79CD\u5236\u5907\u6743\u5229\u8981\u6C421\u62162\u6240\u8FF0\u6676\u578BA\u7684\u65B9\u6CD5...",
  description: "\u6280\u672F\u9886\u57DF\n\u672C\u53D1\u660E\u6D89\u53CA\u533B\u836F\u5316\u5B66\u9886\u57DF\uFF0C\u5177\u4F53\u6D89\u53CA\u4E00\u79CD\u542B\u6C2E\u6742\u73AF\u5316\u5408\u7269\u7684\u6676\u578B\u3001\u5176\u5236\u5907\u65B9\u6CD5\u53CA\u5176\u5728\u5236\u5907\u6297\u80BF\u7624\u836F\u7269\u4E2D\u7684\u5E94\u7528\u3002\n\n\u80CC\u666F\u6280\u672F\n\u73B0\u6709\u6280\u672F\u4E2D\uFF0C\u8BE5\u7C7B\u5316\u5408\u7269\u867D\u7136\u5177\u6709\u4E00\u5B9A\u7684\u4F53\u5916\u6D3B\u6027\uFF0C\u4F46\u5176\u6C34\u6EB6\u6027\u6781\u5DEE\uFF0C\u5BFC\u81F4\u52A8\u7269\u4F53\u5185\u7684\u751F\u7269\u5229\u7528\u5EA6\u6781\u4F4E\uFF0C\u65E0\u6CD5\u6EE1\u8DB3\u4E34\u5E8A\u6210\u836F\u7684\u8981\u6C42\u3002\u56E0\u6B64\uFF0C\u5BFB\u627E\u5177\u6709\u4F18\u826F\u7269\u7406\u5316\u5B66\u6027\u8D28\u7684\u6676\u578B\u662F\u8BE5\u9886\u57DF\u4E9F\u5F85\u89E3\u51B3\u7684\u95EE\u9898\u3002\n\n\u53D1\u660E\u5185\u5BB9\n\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u6280\u672F\u95EE\u9898\uFF0C\u672C\u53D1\u660E\u63D0\u4F9B\u4E86\u4E00\u79CD\u5F0F(I)\u6240\u793A\u5316\u5408\u7269\u7684\u6676\u578BA...",
  citedPatents: [
    { id: "CN109876543A", title: "\u4E00\u79CD\u65B0\u578B\u6FC0\u9176\u6291\u5236\u5242\u53CA\u5176\u5E94\u7528" },
    { id: "US20210123456A1", title: "Nitrogen-containing heterocyclic compounds" },
    { id: "CN110123456A", title: "\u53D6\u4EE3\u7684\u5421\u5576\u5E76\u5627\u5576\u7C7B\u5316\u5408\u7269\u53CA\u5176\u4F5C\u4E3A\u6297\u80BF\u7624\u836F\u7269\u7684\u5E94\u7528" },
    { id: "EP3456789A1", title: "Novel kinase inhibitors for cancer therapy" },
    { id: "WO2022098765A1", title: "Heterocyclic compounds and their pharmaceutical compositions" }
  ],
  similarPatents: [
    { id: "CN112345678A", title: "\u53D6\u4EE3\u7684\u5627\u5576\u884D\u751F\u7269\u53CA\u5176\u4F5C\u4E3A\u6FC0\u9176\u6291\u5236\u5242\u7684\u7528\u9014", match: 92 },
    { id: "CN113456789A", title: "\u4E00\u79CD\u5421\u5576\u7C7B\u5316\u5408\u7269\u7684\u76D0\u53CA\u5176\u6676\u578B", match: 88 },
    { id: "CN114567890A", title: "\u542B\u6C2E\u6742\u73AF\u7C7B\u5316\u5408\u7269\u7684\u5236\u5907\u65B9\u6CD5\u4F18\u5316", match: 85 },
    { id: "CN115678901A", title: "\u9776\u5411EGFR\u7A81\u53D8\u7684\u6297\u80BF\u7624\u836F\u7269\u7EC4\u5408\u7269", match: 81 },
    { id: "CN116789012A", title: "\u4E00\u79CD\u9AD8\u6EB6\u89E3\u5EA6\u7684\u6742\u73AF\u5316\u5408\u7269\u6676\u578BB", match: 79 }
  ]
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const patent = patentData;
    const leftComponents = [
      { is: __nuxt_component_0, props: { data: patent } },
      { is: _sfc_main$9, props: { text: patent.abstract } },
      { is: __nuxt_component_2, props: { claims: patent.claims, description: patent.description } },
      { is: __nuxt_component_3, props: { cited: patent.citedPatents, similar: patent.similarPatents } }
    ];
    const rightComponents = [
      { is: _sfc_main$6, props: { data: patent } },
      { is: __nuxt_component_5, props: { timeline: patent.timeline } }
    ];
    useHead({
      title: `${patent.title} - \u4E13\u5229\u8BE6\u60C5 - \u8F6C\u679C\u679C`,
      meta: [
        { name: "description", content: `${patent.abstract} AI\u8BC4\u4F30\u663E\u793A\u5176${patent.aiSummary.effect}` },
        { name: "keywords", content: `\u4E13\u5229, \u79D1\u6280\u6210\u679C\u8F6C\u5316, ${patent.title}, ${patent.inventors.map((i) => i.name).join(", ")}, ${patent.applicants.map((a) => a.name).join(", ")}` },
        { property: "og:title", content: `${patent.title} - \u4E13\u5229\u8BE6\u60C5` },
        { property: "og:description", content: patent.abstract },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "\u8F6C\u679C\u679C" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: patent.title },
        { name: "twitter:description", content: patent.abstract }
      ],
      link: [
        { rel: "canonical", href: `https://zhuanguoguo.com/patent/${patent.applicationNumber}` }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: patent.title,
            identifier: patent.applicationNumber,
            description: patent.abstract,
            dateCreated: patent.applicationDate,
            datePublished: patent.publicationDate,
            author: patent.inventors.map((i) => ({
              "@type": "Person",
              name: i.name,
              affiliation: { "@type": "Organization", name: i.org }
            })),
            applicant: patent.applicants.map((a) => ({
              "@type": "Organization",
              name: a.name
            })),
            about: patent.ipc.map((c) => ({
              "@type": "DefinedTerm",
              termCode: c.code,
              name: c.name
            })),
            provider: {
              "@type": "Organization",
              name: "\u8F6C\u679C\u679C",
              url: "https://zhuanguoguo.com"
            }
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumb = _sfc_main$4;
      const _component_PatentHeader = __nuxt_component_7;
      const _component_ShareButton = __nuxt_component_8;
      const _component_AiAssessment = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20" }, _attrs))} data-v-9a9a3b0a><article itemscope itemtype="https://schema.org/CreativeWork" data-v-9a9a3b0a>`);
      _push(ssrRenderComponent(_component_Breadcrumb, {
        title: unref(patent).title
      }, null, _parent));
      _push(`<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4" data-v-9a9a3b0a>`);
      _push(ssrRenderComponent(_component_PatentHeader, {
        data: unref(patent),
        class: "flex-1"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ShareButton, { class: "shrink-0 sm:mt-2" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AiAssessment, { data: unref(patent) }, null, _parent));
      _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8" data-v-9a9a3b0a><div class="lg:col-span-2 space-y-8" data-v-9a9a3b0a><!--[-->`);
      ssrRenderList(leftComponents, (comp, idx) => {
        _push(`<div class="stagger-item" style="${ssrRenderStyle({ animationDelay: `${idx * 0.1}s` })}" data-v-9a9a3b0a>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(comp.is), mergeProps({ ref_for: true }, comp.props), null), _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="space-y-8" data-v-9a9a3b0a><!--[-->`);
      ssrRenderList(rightComponents, (comp, idx) => {
        _push(`<div class="stagger-item" style="${ssrRenderStyle({ animationDelay: `${(idx + 4) * 0.1}s` })}" data-v-9a9a3b0a>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(comp.is), mergeProps({ ref_for: true }, comp.props), null), _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></article></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9a9a3b0a"]]);

export { index as default };
//# sourceMappingURL=index-DVrptjRS.mjs.map
