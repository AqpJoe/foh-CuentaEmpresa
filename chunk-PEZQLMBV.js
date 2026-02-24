import{Ab as F,Bb as G,Cb as Y,Eb as l,Fb as N,Ra as q,Sa as k,Ub as J,Za as z,fb as X,l as $,q as L,x as P}from"./chunk-OLN33UF4.js";import{Eb as o,Fb as C,Gb as E,Mc as V,Nb as I,Qc as B,Ra as d,Sb as H,U as v,Ub as M,V as h,Vb as O,Wa as w,Wb as Q,X as x,Xb as m,Yc as D,Z as r,Zb as g,_b as b,fc as s,ib as A,jb as y,kb as R,mb as T,nb as _,ob as f,qa as p,rc as S,wb as j}from"./chunk-HZ2KCH2Y.js";var K=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var ae=`
    ${K}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,re={root:({instance:e})=>["p-textarea p-component",{"p-filled":e.$filled(),"p-textarea-resizable ":e.autoResize,"p-variant-filled":e.$variant()==="filled","p-textarea-fluid":e.hasFluid,"p-inputfield-sm p-textarea-sm":e.pSize==="small","p-textarea-lg p-inputfield-lg":e.pSize==="large","p-invalid":e.invalid()}]},U=(()=>{class e extends z{name="textarea";style=ae;classes=re;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var W=new x("TEXTAREA_INSTANCE"),Ne=(()=>{class e extends Y{bindDirectiveInstance=r(l,{self:!0});$pcTextarea=r(W,{optional:!0,skipSelf:!0})??void 0;autoResize;pSize;variant=B();fluid=B(void 0,{transform:D});invalid=B(void 0,{transform:D});$variant=V(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new w;ngControlSubscription;_componentStyle=r(U);ngControl=r(X,{optional:!0,self:!0});pcFluid=r(J,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(t.target?.value),this.updateState()}resize(t){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(t||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275dir=R({type:e,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(i,n){i&1&&H("input",function(a){return n.onInput(a)}),i&2&&s(n.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",D],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[S([U,{provide:W,useExisting:e},{provide:F,useExisting:e}]),_([l]),T]})}return e})(),we=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=y({type:e});static \u0275inj=h({})}return e})();var Z=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`;var oe=["start"],le=["end"],de=["center"],se=["*"];function pe(e,c){e&1&&I(0)}function ce(e,c){if(e&1&&(C(0,"div",1),f(1,pe,1,0,"ng-container",2),E()),e&2){let t=M();s(t.cx("start")),o("pBind",t.ptm("start")),d(),o("ngTemplateOutlet",t.startTemplate||t._startTemplate)}}function ue(e,c){e&1&&I(0)}function fe(e,c){if(e&1&&(C(0,"div",1),f(1,ue,1,0,"ng-container",2),E()),e&2){let t=M();s(t.cx("center")),o("pBind",t.ptm("center")),d(),o("ngTemplateOutlet",t.centerTemplate||t._centerTemplate)}}function me(e,c){e&1&&I(0)}function ge(e,c){if(e&1&&(C(0,"div",1),f(1,me,1,0,"ng-container",2),E()),e&2){let t=M();s(t.cx("end")),o("pBind",t.ptm("end")),d(),o("ngTemplateOutlet",t.endTemplate||t._endTemplate)}}var be={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},ee=(()=>{class e extends z{name="toolbar";style=Z;classes=be;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var te=new x("TOOLBAR_INSTANCE"),ve=(()=>{class e extends G{$pcToolbar=r(te,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;ariaLabelledBy;_componentStyle=r(ee);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"start":case"left":this._startTemplate=t.template;break;case"end":case"right":this._endTemplate=t.template;break;case"center":this._centerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=A({type:e,selectors:[["p-toolbar"]],contentQueries:function(i,n,u){if(i&1&&(m(u,oe,4),m(u,le,4),m(u,de,4),m(u,q,4)),i&2){let a;g(a=b())&&(n.startTemplate=a.first),g(a=b())&&(n.endTemplate=a.first),g(a=b())&&(n.centerTemplate=a.first),g(a=b())&&(n.templates=a)}},hostAttrs:["role","toolbar"],hostVars:3,hostBindings:function(i,n){i&2&&(j("aria-labelledby",n.ariaLabelledBy),s(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[S([ee,{provide:te,useExisting:e},{provide:F,useExisting:e}]),_([l]),T],ngContentSelectors:se,decls:4,vars:3,consts:[[3,"class","pBind",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(O(),Q(0),f(1,ce,2,4,"div",0)(2,fe,2,4,"div",0)(3,ge,2,4,"div",0)),i&2&&(d(),o("ngIf",n.startTemplate||n._startTemplate),d(),o("ngIf",n.centerTemplate||n._centerTemplate),d(),o("ngIf",n.endTemplate||n._endTemplate))},dependencies:[P,$,L,k,N,l],encapsulation:2,changeDetection:0})}return e})(),Ze=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=y({type:e});static \u0275inj=h({imports:[ve,k,N,k,N]})}return e})();export{Ne as a,we as b,ve as c,Ze as d};
