"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[26],{5026:function(e,t,s){s.r(t),s.d(t,{default:function(){return W}});var o=s(8683),n=s(5671),r=s(3144),i=s(136),a=s(5716),l=s(2791),c="Profile_content__CAXPx";var u=s(181);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var o,n,r=[],i=!0,a=!1;try{for(s=s.call(e);!(i=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(l){a=!0,n=l}finally{try{i||null==s.return||s.return()}finally{if(a)throw n}}return r}}(e,t)||(0,u.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p={profileInfo:"ProfileInfo_profileInfo__zWuDD",contentImg:"ProfileInfo_contentImg__uJJLX",descriptionBlock:"ProfileInfo_descriptionBlock__1V1Mc",mainPhotoWrapper:"ProfileInfo_mainPhotoWrapper__uWPC4",mainPhoto:"ProfileInfo_mainPhoto__HeemO",contact:"ProfileInfo_contact__9c36d"},f=s(3226),h=s(6199),m=s(184),x=function(e){var t=d((0,l.useState)(!1),2),s=t[0],o=t[1],n=d((0,l.useState)(e.status),2),r=n[0],i=n[1];(0,l.useEffect)((function(){i(e.status)}),[e.status]);return(0,m.jsxs)("div",{children:[!s&&(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Status: "}),(0,m.jsx)("span",{onDoubleClick:function(){o(!0)},children:e.status})]}),s&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,value:r,onBlur:function(){o(!1),e.updateStatus(r)}})})]})},j=s(6139),v=s(704),P=s(8041),b=s(7187),y=s(6079),_=(0,v.Z)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile,o=e.error;return(0,m.jsxs)("form",{onSubmit:t,children:[o&&(0,m.jsx)("div",{className:y.Z.formSummaryError,children:o}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"Save"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Full name"}),": ",(0,m.jsx)(j.Z,{placeholder:"Full name",name:"fullName",component:P.N,validate:[b.C],elementType:"input"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Looking for a job"}),":",(0,m.jsx)(j.Z,{name:"lookingForAJob",component:P.N,validate:[],type:"checkbox"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"My professional skills"}),":",(0,m.jsx)(j.Z,{placeholder:"My professional skills",name:"lookingForAJobDescription",component:P.N,validate:[],elementType:"textarea"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"About me"}),":",(0,m.jsx)(j.Z,{placeholder:"About me",name:"aboutMe",component:P.N,validate:[],elementType:"textarea"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Contacts"}),": ",s.contacts&&Object.keys(s.contacts).map((function(e){return(0,m.jsx)("div",{className:p.contact,children:(0,m.jsxs)("b",{children:[e,": ",(0,m.jsx)(j.Z,{placeholder:e,name:"contacts."+e,component:P.N,validate:[],elementType:"input"})]})},e)}))]})]})})),g=function(e){return(0,m.jsxs)("div",{children:[e.isOwner&&(0,m.jsx)("div",{children:(0,m.jsx)("button",{onClick:e.goToEditMode,children:"edit"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Full name"}),": ",e.profile.fullName]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Looking for a job"}),": ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"My professional skills"}),": ",e.profile.lookingForAJobDescription]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"About me"}),": ",e.profile.aboutMe]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.profile.contacts).map((function(t){var s;return(0,m.jsx)(k,{contactTitle:t,contactValue:null===(s=e.profile)||void 0===s?void 0:s.contacts[t]},t)}))]})]})},k=function(e){var t=e.contactTitle,s=e.contactValue;return(0,m.jsxs)("div",{className:p.contact,children:[(0,m.jsx)("b",{children:t}),": ",s]})},N=function(e){var t=d((0,l.useState)(!1),2),s=t[0],o=t[1];if(!e.profile)return(0,m.jsx)(f.Z,{});return(0,m.jsxs)("div",{className:p.profileInfo,children:[(0,m.jsx)("div",{className:p.content,children:(0,m.jsx)("img",{src:"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg",alt:"#",className:p.contentImg})}),(0,m.jsxs)("div",{className:p.descriptionBlock,children:[(0,m.jsx)("img",{src:e.profile.photos.large||h,className:p.mainPhoto,alt:""}),e.isOwner&&(0,m.jsx)("input",{type:"file",onChange:function(t){if(t.target&&t.target.files&&t.target.files.length>0){var s=t.target.files[0];e.savePhoto(s)}}}),s?(0,m.jsx)(_,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){o(!1)}))}}):(0,m.jsx)(g,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){o(!0)}}),(0,m.jsx)(x,{status:e.status,updateStatus:e.updateStatus})]})]})},S="MyPosts_addPostForm__wzF-P",I="MyPosts_addButton__kp9Ve",w="MyPosts_removeButton__d1JhJ",C="MyPosts_myPostsHeader__X0KFS",A="MyPosts_mypostBlock__-+QMv",M="MyPosts_posts__+r7SU",Z="Post_item__LJPXq",T=function(e){return(0,m.jsxs)("div",{className:Z,children:[(0,m.jsx)("img",{src:"https://slovnet.ru/wp-content/uploads/2019/01/53-9.jpg",alt:""}),e.message,(0,m.jsx)("div",{children:(0,m.jsx)("span",{children:e.likeCount})})]})},F=(0,b.D)(10),J=(0,v.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,m.jsxs)("form",{onSubmit:e.handleSubmit,className:S,children:[(0,m.jsx)("div",{children:(0,m.jsx)(j.Z,{name:"newPostText",component:P.N,validate:[b.C,F],elementType:"textarea"})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{className:I,children:"Add post"})}),(0,m.jsx)("button",{className:w,children:"Remove"})]})})),O=l.memo((function(e){var t=e.posts.map((function(e,t){return(0,m.jsx)(T,{message:e.message,likeCount:e.likesCount},t)}));return(0,m.jsxs)("div",{className:A,children:[(0,m.jsx)("h3",{className:C,children:"My posts"}),(0,m.jsx)(J,{onSubmit:function(t){var s;null===(s=e.addPostAC)||void 0===s||s.call(e,t.newPostText)}}),(0,m.jsx)("div",{className:M,children:t})]})})),D=s(364),B=s(4136),U=(0,D.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPostAC:function(t){e((0,B.Pi)(t))}}}))(O),z=function(e){return(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)(N,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),(0,m.jsx)(U,{})]})},E=s(9271),V=s(7781),L=function(e){(0,i.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,n.Z)(this,s),t.apply(this,arguments)}return(0,r.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||null==this.props.authorizedUserId||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!=this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,m.jsx)("div",{children:(0,m.jsx)(z,(0,o.Z)((0,o.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))})}}]),s}(l.Component),W=(0,V.qC)((0,D.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:B.et,getStatus:B.lR,updateStatus:B.Nf,savePhoto:B.Ju,saveProfile:B.Ii}),E.EN)(L)}}]);
//# sourceMappingURL=26.ac0d67bf.chunk.js.map