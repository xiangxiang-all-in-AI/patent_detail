import { defineComponent, ref, mergeProps, unref, useSSRContext, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import { Building2, FileText, ChevronDown, Tag, Clock, MapPin, Activity, Home, ChevronRight, Check, Copy, User, Share2, Target, Lightbulb, Rocket, Sparkles } from "lucide-vue-next";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./v3-wF-usxdD.js";
import "/Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/hookable/dist/index.mjs";
import "/Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/unctx/dist/index.mjs";
import "/Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/defu/dist/defu.mjs";
import "/Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/ufo/dist/index.mjs";
import "/Users/xiangxiang/projects/tech-transfer-patent-details/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "StakeholdersCard",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const activeTab = ref("inventors");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border" }, _attrs))} data-v-b4f12cff><div class="flex items-center gap-6 border-b border-slate-100 mb-6" data-v-b4f12cff><button class="${ssrRenderClass([unref(activeTab) === "inventors" ? "text-blue-600" : "text-slate-500 hover:text-slate-800", "pb-3 text-sm font-bold transition-colors relative"])}" data-v-b4f12cff> 发明人 `);
      if (unref(activeTab) === "inventors") {
        _push(`<div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full tab-indicator" data-v-b4f12cff></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button class="${ssrRenderClass([unref(activeTab) === "applicants" ? "text-blue-600" : "text-slate-500 hover:text-slate-800", "pb-3 text-sm font-bold transition-colors relative"])}" data-v-b4f12cff> 申请人 `);
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
          _push(`</div><div class="min-w-0" data-v-b4f12cff><div class="font-bold text-slate-900 truncate" data-v-b4f12cff>${ssrInterpolate(app.name)}</div><div class="text-xs text-slate-500 truncate" data-v-b4f12cff>${ssrInterpolate(app.type)} · ${ssrInterpolate(app.patents)} 项专利</div></div></div><div class="flex flex-wrap gap-2" data-v-b4f12cff><!--[-->`);
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
      _push(`<h3 class="text-lg font-bold text-slate-900">摘要</h3></div><p class="text-slate-700 leading-relaxed text-sm">${ssrInterpolate(__props.text)}</p></section>`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-gradient-border" }, _attrs))} data-v-f5c52855><div class="flex border-b border-slate-100" data-v-f5c52855><button class="${ssrRenderClass([unref(activeTab) === "claims" ? "text-blue-600" : "text-slate-500 hover:text-slate-700", "px-6 py-4 font-medium text-sm transition-colors relative"])}" data-v-f5c52855> 权利要求 `);
      if (unref(activeTab) === "claims") {
        _push(`<div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator" data-v-f5c52855></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button class="${ssrRenderClass([unref(activeTab) === "description" ? "text-blue-600" : "text-slate-500 hover:text-slate-700", "px-6 py-4 font-medium text-sm transition-colors relative"])}" data-v-f5c52855> 说明书 `);
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
      _push(`<button class="w-full py-3 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 transition-colors flex items-center justify-center gap-1 border-t border-slate-50" data-v-f5c52855><span data-v-f5c52855>${ssrInterpolate(unref(expanded) ? "收起" : "展开全文")}</span>`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-gradient-border" }, _attrs))} data-v-bda8048a><div class="flex border-b border-slate-100" data-v-bda8048a><button class="${ssrRenderClass([unref(activeTab) === "cited" ? "text-blue-600" : "text-slate-500 hover:text-slate-700", "px-6 py-4 font-medium text-sm transition-colors relative"])}" data-v-bda8048a> 引用专利 `);
      if (unref(activeTab) === "cited") {
        _push(`<div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator" data-v-bda8048a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button class="${ssrRenderClass([unref(activeTab) === "similar" ? "text-blue-600" : "text-slate-500 hover:text-slate-700", "px-6 py-4 font-medium text-sm transition-colors relative"])}" data-v-bda8048a> 相似专利 `);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border" }, _attrs))}><h3 class="text-lg font-bold text-slate-900 mb-4">基本信息</h3><div class="space-y-4"><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Tag), { class: "w-3 h-3" }, null, _parent));
      _push(` IPC分类</span><div class="flex flex-wrap gap-2 mt-1"><!--[-->`);
      ssrRenderList(__props.data.ipc, (item) => {
        _push(`<span class="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-md font-mono flex items-center gap-1.5 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-default"><span class="font-bold">${ssrInterpolate(item.code)}</span><span class="text-slate-500">${ssrInterpolate(item.name)}</span></span>`);
      });
      _push(`<!--]--></div></div><div class="h-px w-full bg-slate-100"></div><div class="grid grid-cols-2 gap-4"><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-3 h-3" }, null, _parent));
      _push(` 申请日</span><time${ssrRenderAttr("datetime", __props.data.applicationDate)} class="text-sm font-medium text-slate-900">${ssrInterpolate(__props.data.applicationDate)}</time></div><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-3 h-3" }, null, _parent));
      _push(` 公开日</span><time${ssrRenderAttr("datetime", __props.data.publicationDate)} class="text-sm font-medium text-slate-900">${ssrInterpolate(__props.data.publicationDate)}</time></div></div><div class="h-px w-full bg-slate-100"></div><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-3 h-3" }, null, _parent));
      _push(` 代理机构</span><span class="text-sm font-medium text-slate-900">${ssrInterpolate(__props.data.agency)}</span></div><div class="h-px w-full bg-slate-100"></div><div class="flex flex-col gap-1"><span class="text-xs text-slate-500 flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-3 h-3" }, null, _parent));
      _push(` 申请人地址</span><address class="text-sm font-medium text-slate-900 not-italic">${ssrInterpolate(__props.data.applicantAddress)}</address></div></div></section>`);
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
      _push(`<h3 class="text-lg font-bold text-slate-900" data-v-412f4003>专利时间轴</h3></div><div class="relative ml-3 space-y-8" data-v-412f4003><div class="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-100" data-v-412f4003><div class="w-full bg-gradient-to-b from-blue-500 to-blue-200 rounded-full timeline-line-fill" style="${ssrRenderStyle({ height: unref(lineHeight) })}" data-v-412f4003></div></div><!--[-->`);
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
        "aria-label": "面包屑",
        class: "mb-6"
      }, _attrs))}><ol class="flex items-center gap-2 text-sm" itemscope itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="/" itemprop="item" class="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Home), { class: "w-3.5 h-3.5" }, null, _parent));
      _push(`<span itemprop="name">首页</span></a><meta itemprop="position" content="1"></li>`);
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-3.5 h-3.5 text-slate-300" }, null, _parent));
      _push(`<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="/patents" itemprop="item" class="text-slate-500 hover:text-blue-600 transition-colors"><span itemprop="name">科创库</span></a><meta itemprop="position" content="2"></li>`);
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
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-cd13a265><div class="flex items-center gap-3 mb-4" data-v-cd13a265><span class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 status-pulse" data-v-cd13a265>${ssrInterpolate(__props.data.status)}</span><button class="text-sm font-medium text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1.5 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer group"${ssrRenderAttr("title", unref(copied) ? "已复制" : "点击复制申请号")} data-v-cd13a265>${ssrInterpolate(__props.data.applicationNumber)} `);
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
      _push(` 分享 </button>`);
      if (unref(showToast)) {
        _push(`<span class="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full font-medium" data-v-535b72fe> 链接已复制 </span>`);
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
      { title: "解决问题", icon: Target, content: props.data.aiSummary.problem, gradient: "from-rose-500 to-orange-400", bg: "bg-rose-50/50", border: "border-rose-100", iconColor: "text-rose-600" },
      { title: "达成效果", icon: Lightbulb, content: props.data.aiSummary.effect, gradient: "from-amber-400 to-yellow-500", bg: "bg-amber-50/50", border: "border-amber-100", iconColor: "text-amber-600" },
      { title: "主要用途", icon: Rocket, content: props.data.aiSummary.application, gradient: "from-emerald-400 to-teal-500", bg: "bg-emerald-50/50", border: "border-emerald-100", iconColor: "text-emerald-600" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-8 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-blue-100 relative overflow-hidden card-gradient-border" }, _attrs))}><div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div><div class="ai-shimmer absolute inset-0 pointer-events-none"></div><div class="relative"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-5 h-5 text-blue-600" }, null, _parent));
      _push(`</div><div><h2 class="text-xl font-bold text-slate-900">科技成果转化评估</h2><p class="text-sm text-slate-500 mt-0.5">基于大模型深度解析专利商业价值</p></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
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
  title: "一种含氮杂环化合物的晶型、其制备方法及其应用",
  applicationNumber: "CN202310123456.7",
  status: "实质审查",
  applicationDate: "2023-02-15",
  publicationDate: "2023-08-22",
  ipc: [
    { code: "C07D 401/14", name: "含有三个或更多个杂环的杂环化合物" },
    { code: "A61K 31/4439", name: "含有吡啶环的药物制剂" },
    { code: "A61P 35/00", name: "抗肿瘤药" }
  ],
  agency: "北京某某知识产权代理有限公司",
  applicantAddress: "北京市海淀区清华园1号",
  abstract: "本发明公开了一种含氮杂环化合物的晶型、其制备方法及其应用。该晶型具有良好的物理化学稳定性，溶解度高，生物利用度好，适用于制备治疗肿瘤等疾病的药物。本发明还提供了该晶型的制备方法，工艺简单，重现性好，适合工业化大生产。",
  aiSummary: {
    problem: "现有抗肿瘤药物存在水溶性差、生物利用度低、物理化学性质不稳定等问题，导致制剂困难和临床疗效受限。",
    effect: "显著提高了化合物的溶解度和溶出速率，口服生物利用度提升约3倍；在高温、高湿和光照条件下保持极高的晶型稳定性。",
    application: "可直接用于开发新型靶向抗肿瘤口服固体制剂（如片剂、胶囊），特别适用于非小细胞肺癌和乳腺癌的靶向治疗药物开发。"
  },
  timeline: [
    { date: "2023-09-10", event: "进入实质审查阶段" },
    { date: "2023-08-22", event: "初步审查合格并公开" },
    { date: "2023-02-15", event: "专利申请" }
  ],
  inventors: [
    { name: "林舒雅", org: "清华大学", role: "第一发明人", patents: 156, expertise: ["半导体器件", "GaN研究", "射频集成电路"], match: 98 },
    { name: "王利民", org: "清华大学", role: "共同发明人", patents: 89, expertise: ["微电子", "芯片设计"], match: 85 },
    { name: "欧阳慕容", org: "北京某某科技有限公司研发中心", role: "共同发明人", patents: 42, expertise: ["晶型药物开发", "药物分析", "制剂工艺优化"], match: 92 }
  ],
  applicants: [
    { name: "清华大学", type: "高校", patents: 12500, expertise: ["信息技术", "材料科学", "生物医药"] },
    { name: "北京某某科技有限公司", type: "企业", patents: 340, expertise: ["医药研发", "创新药"] },
    { name: "上海某某医药科技发展集团股份有限公司", type: "企业", patents: 120, expertise: ["靶向药物", "临床研究", "医药中间体合成"] }
  ],
  claims: "1. 一种式(I)所示化合物的晶型A，其特征在于，使用Cu-Kα辐射，其X射线粉末衍射图谱在2θ角度为...\n\n2. 根据权利要求1所述的晶型A，其特征在于...\n\n3. 一种制备权利要求1或2所述晶型A的方法...",
  description: "技术领域\n本发明涉及医药化学领域，具体涉及一种含氮杂环化合物的晶型、其制备方法及其在制备抗肿瘤药物中的应用。\n\n背景技术\n现有技术中，该类化合物虽然具有一定的体外活性，但其水溶性极差，导致动物体内的生物利用度极低，无法满足临床成药的要求。因此，寻找具有优良物理化学性质的晶型是该领域亟待解决的问题。\n\n发明内容\n为了解决上述技术问题，本发明提供了一种式(I)所示化合物的晶型A...",
  citedPatents: [
    { id: "CN109876543A", title: "一种新型激酶抑制剂及其应用" },
    { id: "US20210123456A1", title: "Nitrogen-containing heterocyclic compounds" },
    { id: "CN110123456A", title: "取代的吡啶并嘧啶类化合物及其作为抗肿瘤药物的应用" },
    { id: "EP3456789A1", title: "Novel kinase inhibitors for cancer therapy" },
    { id: "WO2022098765A1", title: "Heterocyclic compounds and their pharmaceutical compositions" }
  ],
  similarPatents: [
    { id: "CN112345678A", title: "取代的嘧啶衍生物及其作为激酶抑制剂的用途", match: 92 },
    { id: "CN113456789A", title: "一种吡啶类化合物的盐及其晶型", match: 88 },
    { id: "CN114567890A", title: "含氮杂环类化合物的制备方法优化", match: 85 },
    { id: "CN115678901A", title: "靶向EGFR突变的抗肿瘤药物组合物", match: 81 },
    { id: "CN116789012A", title: "一种高溶解度的杂环化合物晶型B", match: 79 }
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
      title: `${patent.title} - 专利详情 - 转果果`,
      meta: [
        { name: "description", content: `${patent.abstract} AI评估显示其${patent.aiSummary.effect}` },
        { name: "keywords", content: `专利, 科技成果转化, ${patent.title}, ${patent.inventors.map((i) => i.name).join(", ")}, ${patent.applicants.map((a) => a.name).join(", ")}` },
        { property: "og:title", content: `${patent.title} - 专利详情` },
        { property: "og:description", content: patent.abstract },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "转果果" },
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
              name: "转果果",
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
export {
  index as default
};
//# sourceMappingURL=index-DVrptjRS.js.map
