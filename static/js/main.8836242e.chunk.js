(this["webpackJsonpretirement-calculator"]=this["webpackJsonpretirement-calculator"]||[]).push([[0],{152:function(e,t,a){},344:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(14),i=a.n(o),c=a(18),s=(a(152),a(391)),l=a(392),d=a(137),u=a(395),b=a(393),h=a(140),j={COMBINED_INVESTMENTS:"Combined ESOP + 401(k) Growth",ESOP_GROWTH:"ESOP Growth",USAGE_GUIDE:"Usage Guide",INVESTMENT_REFERENCES:"Investment References",ONLY_401K:"401(k) Growth"},p=a(390),x=a(397),m=a(389),g=a(387),O=a(388),y=a(386),v=a(2);var f=Object(c.c)((function(e){var t=e.store,a=function(){t.acknowledgedDisclaimer=!0};return Object(v.jsx)("div",{children:Object(v.jsxs)(x.a,{"data-testid":"disclaimer",disableBackdropClick:!0,disableEscapeKeyDown:!0,open:!t.acknowledgedDisclaimer,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(v.jsx)(y.a,{id:"alert-dialog-title",children:"Disclaimer"}),Object(v.jsx)(g.a,{children:Object(v.jsxs)(O.a,{id:"alert-dialog-description",children:["This is a simple mathematical calculator. It is not a guarantee of future returns. All investments (including the ESOP and 401(k)) are subject to risk. The potential for loss (or gains) may be greater than calculated. This calculator is not intended to provide tax, investment, or legal advice.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Please also keep in mind the following:",Object(v.jsx)("br",{}),"- Results using the calculator may change over time based on your inputs and as we update our assumptions.",Object(v.jsx)("br",{}),"- Our assumptions may not be correct or accurately project market conditions, inflation, or tax rates.",Object(v.jsx)("br",{}),"- The calculator also does not take into account IRS or plan contribution limits, which may result in an overestimate of benefits.",Object(v.jsx)("br",{}),"- The calculator does not take into account taxes you may owe or that may be withheld at distribution. These will affect how much of the benefits you actually receive.",Object(v.jsx)("br",{}),"- The operation of the plans and the benefits to which you (or your beneficiaries) may be entitled will be governed solely by the terms of the official plan documents. To the extent that any of the information in this calculator or any information you receive orally is inconsistent with the official plan documents, the provisions set forth in the plan documents will govern in all cases.",Object(v.jsx)("br",{})]})}),Object(v.jsx)(m.a,{children:Object(v.jsx)(p.a,{"data-testid":"acknowledge-button",onClick:a,variant:"contained",color:"primary",autoFocus:!0,disableFocusRipple:!0,children:"Acknowledge"})})]})})})),w=["January","February","March","April","May","June","July","August","September","October","November","December"];var S=function(){var e=new Date,t=w[e.getMonth()];return Object(v.jsxs)("div",{align:"left","background-color":"#F7F7F8","data-testid":"usage-guide",children:[Object(v.jsx)(h.a,{variant:"h5",children:"Using The Tool"}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"This calculator is a tool for modeling possible ESOP and 401(k) growth using the provided input values. Values can be set using the inputs on the left, and then the visual growth calculations can be seen by selecting a tab above to view them separately or in a combined graph. The ESOP Growth chart will also include your ESOP entry data and vesting percentages, if applicable."}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"h5",children:"Privacy"}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"This calculator is completely self-contained. No data is transmitted to the server or stored in the browser after it is closed. No metrics are collected on entered values. The Current Age field is only used to provide more accurate calculations based on 2021 contribution limits. It is used to raise the 401(k) contribution limit the year an employee turns 50, from $19,500 to $26,000."}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"h5",children:"How It Works"}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"Calculations are made as simple interest plus contributions. ESOP account values are contributed to and compounded annually, 401(k) account values are contributed to and compounded monthly."}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"This calculator assumes that an employee started as full time employee on the given start date and will be 18 years of age by the time they have completed one year of employment, and then calculates their ESOP entry date and vesting dates accordingly. Based on 8 hours per working day, employees will enter the ESOP on the quarterly entry date (January 1st, April 1st, July 1st, October 1st) following their fulfillment of the following criteria:"}),Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"US Employee"})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"Age 18 or older"})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"Have completed one year of employment and been paid for at least 1,000 hours"})})]})}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"h5",children:"Chart Usage Tips"}),Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"Hovering over a specific point on the chart will display the specific value(s)."})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"Clicking on the legend entry for a line will toggle the visibility of the line."})})]})}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"h5",children:"How Do I Choose An Average Return?"}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"Accurately projecting future economic growth is beyond the scope of this tool. This tool is best used to assess various possible scenarios and then consider what impact that would have on planning your retirement. It is recommended to try a range of average return values to help visualize future growth potential.  Here are some references that may assist you, and provide a frame of reference for more conservative or aggressive calculations:"}),Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:Object(v.jsx)("a",{href:"https://www.nceo.org/articles/research-employee-ownership-corporate-performance",rel:"noopener noreferrer",target:"_blank",children:"National Center for Employee Ownership: Research On ESOP Performance"})})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:Object(v.jsx)("a",{href:"https://personal.vanguard.com/us/insights/saving-investing/model-portfolio-allocations",rel:"noopener noreferrer",target:"_blank",children:"Vanguard Portfolio Allocation Models"})})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:Object(v.jsx)("a",{href:"https://advisors.vanguard.com/insights/article/marketperspectives".concat(t.toLowerCase(),"2021"),rel:"noopener noreferrer",target:"_blank",children:"Vanguard Market Perspective (".concat(t," 2021)")})})})]})}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"h5",children:"401(k) Fees?"}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"There are administration overhead fees, and each individual fund will have its own fund management fees. For index funds, this is typically very low (less than 2 tenths of a percent), but it can be significantly higher for actively managed funds. A more detailed value to use for calculations can be determined by referencing your current fund balance and aggregating the percentage of various fees at your target asset allocation. Please contact your 401(k) administrator for more information regarding your 401(k) fees."}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"h5",children:"Questions?"}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"body2",color:"textPrimary",children:"For more information, please contact your ESOP administrator."})]})},P=a(23),k=a(394),E=a(133),Y=a.n(E),D=(a(165),a(22)),T="averageAnnual401kFees",A="averageAnnual401kGrowth",C="averageEmployerESOPContribution",F="averageRaise",M="averageShareGrowth",I="currentEmployeeAge",N="employee401kContribution",G="starting401kBalance",R="startingESOPAccountValue",B="startingSalary",V="yearsToCalculate";var W=Object(c.c)((function(e){var t=e.store,a=Object(r.useState)(!1),n=Object(P.a)(a,2),o=n[0],i=n[1],c=Object(r.useState)(!1),s=Object(P.a)(c,2),l=s[0],d=s[1],u=Object(r.useState)(!1),b=Object(P.a)(u,2),p=b[0],x=b[1],m=Object(r.useState)(!1),g=Object(P.a)(m,2),O=g[0],y=g[1],f=Object(r.useState)(!1),w=Object(P.a)(f,2),S=w[0],E=w[1],W=Object(r.useState)(!1),_=Object(P.a)(W,2),H=_[0],U=_[1],L=Object(r.useState)(!1),J=Object(P.a)(L,2),z=J[0],K=J[1],Z=Object(r.useState)(!1),$=Object(P.a)(Z,2),q=$[0],Q=$[1],X=Object(r.useState)(!1),ee=Object(P.a)(X,2),te=ee[0],ae=ee[1],re=Object(r.useState)(!1),ne=Object(P.a)(re,2),oe=ne[0],ie=ne[1],ce=Object(r.useState)(!1),se=Object(P.a)(ce,2),le=se[0],de=se[1],ue={};ue[T]=i,ue[A]=d,ue[C]=x,ue[F]=y,ue[M]=E,ue[I]=U,ue[N]=K,ue[G]=Q,ue[R]=ae,ue[B]=ie,ue[V]=de;var be=function(e){e.preventDefault();var a=Number(e.target.value),r=ue[e.target.id.toString()];""===e.target.value||a<Number(e.target.min)||a>Number(e.target.max)?r(!0):(t.handleInputsUpdate(e.target.id.toString(),a),r(!1))};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{onSubmit:be,children:[Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:"Employee Start Date (FT)"}),Object(v.jsx)("br",{}),Object(v.jsx)(Y.a,{"data-testid":"startDatePicker",disabledKeyboardNavigation:!0,dropdownMode:"select",id:"startDate",maxDate:new Date(t.initYear+1,11,31),minDate:new Date(1982,0,1),onChange:function(e){t.handleInputsUpdate("startDate",e)},scrollableYearDropdown:!0,selected:t.startDate,showMonthDropdown:!0,showYearDropdown:!0}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":B,error:oe,helperText:oe?"Please enter a value between 0 and 1000000":"",id:B,type:"number",label:"Employee Salary ($)",value:oe?"":t.startingSalary.toString(),InputProps:{inputProps:{min:0,max:1e6,step:1e3}},onChange:be,fullWidth:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Current employee salary."})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":F,error:O,helperText:O?"Please enter a value between 0 and 10":"",id:F,type:"number",label:"Average Annual Raise (%)",value:O?"":t.averageRaise.toString(),InputProps:{inputProps:{min:0,max:10}},onChange:be,fullWidth:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Average annual raise to apply to the employee's salary"})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),t.selectedTabName!==j.ONLY_401K&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":R,error:te,helperText:te?"Please enter a value between 0 and 10000000":"",id:R,type:"number",style:{whiteSpace:"nowrap"},label:"Current ESOP Account Balance ($)",value:te?"":t.startingESOPAccountValue.toString(),InputProps:{inputProps:{min:0,max:1e7,step:100}},onChange:be,fullWidth:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Employee ESOP account balance from the current report"})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":C,error:p,helperText:p?"Please enter a value between 5 and 15":"",id:C,type:"number",label:"Annual Employer Contribution (%)",value:p?"":t.averageEmployerESOPContribution,InputProps:{inputProps:{min:5,max:15}},onChange:be,fullWidth:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Percentage of employee's annual salary contributed by the employer to the ESOP."})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":M,error:S,helperText:S?"Please enter a value between 0 and 20":"",id:M,type:"number",style:{whiteSpace:"nowrap"},label:"Average Annual ESOP Growth (%)",value:S?"":t.averageShareGrowth.toString(),InputProps:{inputProps:{min:0,max:20}},onChange:be,fullWidth:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Average year-over-year return on an employee's ESOP account."})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),t.selectedTabName!==j.ESOP_GROWTH&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":I,error:H,helperText:H?"Please enter a value between 18 and 120":"",id:I,type:"number",label:"Current Age",value:H?"":t.currentEmployeeAge,InputProps:{inputProps:{min:18,max:120}},onChange:be,fullWidth:!0}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Current employee age."})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":G,error:q,helperText:q?"Please enter a value between 0 and 10000000":"",id:G,type:"number",label:"Starting 401(k) Balance ($)",value:q?"":t.starting401kBalance.toString(),InputProps:{inputProps:{min:0,max:1e7,step:1e3}},onChange:be,fullWidth:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Employee's 401(k) account balance as of January 1st of the current year."})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":N,error:z,helperText:z?"Please enter a value between 0 and 100":"",id:N,type:"number",label:"Employee 401(k) Contribution (%)",value:z?"":t.employee401kContribution.toString(),InputProps:{inputProps:{min:0,max:100,step:1}},onChange:be,fullWidth:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Percentage of their salary that the employee contributes to their 401(k) account per year, up to their age-determined max."})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":A,error:l,helperText:l?"Please enter a value between 0 and 20":"",id:A,type:"number",style:{whiteSpace:"nowrap"},label:"Average Annual 401(k) Growth (%)",value:l?"":t.averageAnnual401kGrowth.toString(),InputProps:{inputProps:{min:0,max:20}},onChange:be,fullWidth:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Average year-over-year return on an employee's 401(k) account."})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":T,error:o,helperText:o?"Please enter a value between 0 and 2":"",id:T,type:"number",label:"Average Annual 401(k) Fees (%)",value:o?"":t.averageAnnual401kFees.toString(),InputProps:{inputProps:{min:0,max:2,step:.01}},onChange:be,fullWidth:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"401k administration and fund fees. These are subtracted from the average rate of return."})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsx)(D.DebounceInput,{element:k.a,debounceTimeout:300,"data-testid":V,error:le,helperText:le?"Please enter a value between 1 and 60":"",id:V,type:"number",label:"Years To Calculate",value:le?"":t.yearsToCalculate,InputProps:{inputProps:{min:1,max:60}},onChange:be,fullWidth:!0}),Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary",children:Object(v.jsx)("i",{children:"Years of growth to calculate."})}),Object(v.jsx)("br",{})]})})})),_=a(41);function H(e){var t=e.getFullYear()+1,a=e.getDate(),r=e.getMonth();return(a>1||r>0)&&(r<3||3===r&&1===a?r=3:r<6||6===r&&1===a?r=6:r<9||9===r&&1===a?r=9:(r=0,t+=1)),new Date(t,r,1)}function U(e,t){var a=e.getFullYear(),r=e.getMonth(),n=0;if(a<t&&(n=1),a===t)switch(r){case 3:n=.75;break;case 6:n=.5;break;case 9:n=.25;break;default:n=1}return n}function L(e){var t;t=1===e.getDay()?172:174;var a=new Date(e);return a.setDate(a.getDate()+t),a}function J(e){var t=24,a=new Date(e,0,1);return e%4===0?t=1===a.getDay()?21:0===a.getDay()?22:23:1===a.getDay()?t=22:0===a.getDay()&&(t=23),new Date(e,5,t)}function z(e,t){var a=e.getFullYear(),r=0,n=new Date(a,5,24);return 6===new Date(a,11,15).getDay()?n=new Date(a,5,25):5===new Date(a,11,15).getDay()&&(n=new Date(a,5,26)),n.setHours(0,0,0,0),e.setHours(0,0,0,0),a<=t&&(r=t-a,e<=n&&(r+=1)),r}var K=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}),Z=Intl.DateTimeFormat("en-US");var $=Object(c.c)((function(e){for(var t=e.store,a=7-z(t.startDate,t.initYear),r=[],n=[],o=0;o<=a&&o<t.dataPointsESOP.length;o+=1){var i=z(t.startDate,t.initYear+o-1),c={};if(c={x:t.dataPointsESOP[o].x},i<2?(c.y=0,n.push(0)):(c.y=Math.trunc(t.dataPointsESOP[o].y*(.2*(i-1))),n.push(20*(i-1))),r.push(c),0===o){if(1===z(t.startDate,t.initYear)){var s={};s.x=Z.format(L(t.startDate)),s.y=0,r.push(s),n.push(0)}else if(z(t.startDate,t.initYear)>1){var l={};l.x=Z.format(J(t.initYear)),l.y=Math.trunc(t.dataPointsESOP[o].y*(.2*i)),r.push(l),n.push(20*i)}}else if(i<6){var d={};d.x=Z.format(J(t.initYear+o)),d.y=Math.trunc(t.dataPointsESOP[o].y*(.2*i)),r.push(d),n.push(20*i)}}var u={datasets:[{label:"ESOP Account Value",fill:!1,steppedLine:!0,data:t.dataPointsESOP,backgroundColor:"#44A3FF",borderColor:"#44A3FF"}]};return a>0&&(u.datasets[1]={label:"Vested Value",fill:!1,steppedLine:!0,data:r,backgroundColor:"#93989D",borderColor:"#93989D"},H(t.startDate)>=new Date(t.dataPointsESOP[0].x)&&(u.datasets[2]={label:"Plan Entry Date",fill:!1,pointRadius:5,pointHoverRadius:7,data:[{label:"Plan Entry Point",x:H(t.startDate),y:0}],backgroundColor:"#EE7468",borderColor:"#EE7468"})),Object(v.jsx)(_.Line,{data:u,options:{maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"x",intersect:"false",callbacks:{label:function(e,t){var a="";return 0===e.datasetIndex?a="ESOP Account Value: ".concat(K.format(Math.trunc(e.value))):1===e.datasetIndex?a="Vested Value (".concat(n[e.index],"%): ").concat(K.format(Math.trunc(e.value))):2===e.datasetIndex&&(a="Employee enters the ESOP"),a},title:function(e,t){return Z.format(new Date(e[0].label))}}},scales:{xAxes:[{ticks:{beginAtZero:!1,min:"1/1/".concat(t.initYear)},type:"time",time:{displayFormats:{day:"MM/YYYY",week:"MM/YYYY",month:"MM/YYYY",quarter:"MM/YYYY",year:"YYYY"},parser:"MM/DD/YYYY"},distribution:"linear"}],yAxes:[{ticks:{beginAtZero:!1,callback:function(e,t,a){return K.format(e)}}}]}},redraw:!0})}));var q=Object(c.c)((function(e){var t=e.store,a={datasets:[{label:"401(k) Balance",fill:!1,lineTension:.1,data:t.dataPoints401k,backgroundColor:"#F37A0F",borderColor:"#F37A0F"}]};return Object(v.jsx)(_.Line,{data:a,options:{maintainAspectRatio:!1,tooltips:{mode:"x",intersect:"false",callbacks:{label:function(e,t){return"401(k) balance: ".concat(K.format(Math.trunc(e.value)))},title:function(e,t){return Z.format(new Date(e[0].label))}}},scales:{xAxes:[{ticks:{beginAtZero:!1,min:"1/1/".concat(t.initYear)},type:"time",time:{displayFormats:{day:"MM/YYYY",week:"MM/YYYY",month:"MM/YYYY",quarter:"MM/YYYY",year:"YYYY"},parser:"MM/DD/YYYY"},distribution:"linear"}],yAxes:[{ticks:{beginAtZero:!1,callback:function(e,t,a){return K.format(e)}}}]}},redraw:!0})}));var Q=Object(c.c)((function(e){for(var t=e.store,a=[],r=0;r<t.dataPointsESOP.length;r+=1)a[r]={x:t.dataPointsESOP[r].x,y:t.dataPointsESOP[r].y+t.dataPoints401k[r].y};var n={datasets:[{label:"Combined ESOP + 401(k) Value",fill:!1,lineTension:.1,data:a,backgroundColor:"#26943A",borderColor:"#26943A"},{label:"ESOP Account Value",fill:!1,steppedLine:!0,data:t.dataPointsESOP,backgroundColor:"#44A3FF",borderColor:"#44A3FF"},{label:"401(k) Balance",fill:!1,lineTension:.1,data:t.dataPoints401k,backgroundColor:"#F37A0F",borderColor:"#F37A0F"}]};return Object(v.jsx)(_.Line,{data:n,options:{maintainAspectRatio:!1,tooltips:{mode:"x",intersect:"false",callbacks:{label:function(e,t){var a="";return 0===e.datasetIndex?a="Combined Employee Retirement Accounts balance: ".concat(K.format(Math.trunc(e.value))):1===e.datasetIndex?a="ESOP Account Value: ".concat(K.format(Math.trunc(e.value))):2===e.datasetIndex&&(a="401(k) balance: ".concat(K.format(Math.trunc(e.value)))),a},title:function(e,t){return Z.format(new Date(e[0].label))}}},scales:{xAxes:[{ticks:{beginAtZero:!1,min:"1/1/".concat(t.initYear)},type:"time",time:{displayFormats:{day:"MM/YYYY",week:"MM/YYYY",month:"MM/YYYY",quarter:"MM/YYYY",year:"YYYY"},parser:"MM/DD/YYYY"},distribution:"linear"}],yAxes:[{ticks:{beginAtZero:!1,callback:function(e,t,a){return K.format(e)}}}]}},redraw:!0})})),X=function(){return n.a.useContext(c.a)},ee=Object(s.a)({flexRoot:{textAlign:"center",padding:"15px 15px 5px 15px",backgroundColor:"#F7F7F8",borderWidth:"0px",display:"flex",flexFlow:"column",height:"100%"},flexHeader:{flex:"0 0 auto",height:"100px","@media (max-width: 950px)":{height:"120px"}},flexContent:{flex:"1 1 auto"},innerFlex:{display:"flex",flexFlow:"row",height:"calc(100vh - 120px)",width:"100%","@media (max-width: 950px)":{flexFlow:"row wrap",justifyContent:"space-around",height:"100%"}},inputs:{display:"inline-block",boxSizing:"border-box",minWidth:"300px",width:"300px",maxWidth:"300px",verticalAlign:"top",paddingLeft:"15px",paddingRight:"15px",borderWidth:"0px 1px 0px 0px",borderStyle:"solid",borderColor:"#AAAEB2","@media (max-width: 950px)":{width:"100%",maxWidth:"100%",textAlign:"center",borderWidth:"0px 0px 0px 0px"},overflowY:"scroll"},charts:{display:"inline-block",flexGrow:1,boxSizing:"border-box",minWidth:"475px",minHeight:"450px",maxHeight:"calc(100vh - 120px)",verticalAlign:"top",paddingLeft:"2.5%",paddingRight:"2.5%","@media (max-width: 950px)":{height:"450px"},overflowY:"auto"},chartBox:{flexGrow:1,boxSizing:"border-box",height:"calc(100vh - 287px)"},footer:{marginTop:"10px",textAlign:"center"}}),te=Object(c.c)((function(){var e=ee(),t=X().calculatorStore;return Object(v.jsxs)(l.a,{theme:Object(d.a)({palette:{type:"light",accent:!0},typography:{useNextVariants:!0}}),children:[!t.acknowledgedDisclaimer&&Object(v.jsx)(f,{store:t}),Object(v.jsxs)("div",{className:e.flexRoot,children:[Object(v.jsxs)("div",{className:e.flexHeader,children:[Object(v.jsx)(h.a,{variant:"h4",color:"primary",children:"ESOP Retirement Benefits Calculator"}),Object(v.jsx)(h.a,{variant:"body2",color:"textSecondary",children:"This is a simple mathematical calculator. It is not a guarantee of future returns. All investments (including the ESOP and 401(k)) are subject to risk. The potential for loss (or gains) may be greater than calculated. This calculator is not intended to provide tax, investment, or legal advice."}),Object(v.jsx)("hr",{})]}),Object(v.jsx)("div",{className:e.flexContent,children:Object(v.jsxs)("div",{className:e.innerFlex,children:[Object(v.jsx)("div",{className:e.inputs,children:Object(v.jsx)(W,{"data-testid":"projInputs",store:t})}),Object(v.jsxs)("div",{className:e.charts,children:[Object(v.jsx)(u.a,{"data-testid":"tabSelector",value:t.selectedTab,onChange:t.handleTabChange,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",id:"tabs",children:t.tabs.map((function(e){return Object(v.jsx)(b.a,{label:e,disableRipple:!0},e)}))}),Object(v.jsx)("hr",{}),t.selectedTabName===j.USAGE_GUIDE&&Object(v.jsx)(S,{"data-testid":"UsageGuide"}),t.selectedTabName===j.ESOP_GROWTH&&Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary","data-testid":"capESOP",children:Object(v.jsx)("i",{children:"This is the calculated growth for an ESOP account based on the supplied parameters. Its purpose is to help ESOP Employee Owners visualize the long-term rewards of employee ownership over the length of their career."})}),t.selectedTabName===j.ONLY_401K&&Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary","data-testid":"cap401k",children:Object(v.jsx)("i",{children:"This is the calculated growth for a 401(k) account based on the supplied parameters. Its purpose is to help Employee Owners to visualize the growth potential of their own elective savings over the length of their career."})}),t.selectedTabName===j.COMBINED_INVESTMENTS&&Object(v.jsx)(h.a,{variant:"caption",color:"textSecondary","data-testid":"capCombined",children:Object(v.jsx)("i",{children:"This is the combined calculated retirement savings for an ESOP account + 401(k) account, based on the supplied parameters. Its purpose is to empower Employee Owners to better visualize the benefits that employee ownership provides in planning and funding their own retirement."})}),t.selectedTabName===j.ESOP_GROWTH&&Object(v.jsx)("div",{className:e.chartBox,children:Object(v.jsx)($,{"data-testid":"projESOP",store:t})}),t.selectedTabName===j.ONLY_401K&&Object(v.jsx)("div",{className:e.chartBox,children:Object(v.jsx)(q,{"data-testid":"proj401k",store:t})}),t.selectedTabName===j.COMBINED_INVESTMENTS&&Object(v.jsx)("div",{className:e.chartBox,children:Object(v.jsx)(Q,{"data-testid":"projCombined",store:t})})]})]})})]})]})})),ae=a(135),re=a(136),ne=a(8);function oe(e){return e<1?1:e>50?50:e}function ie(e,t){return 0===e?0:Number("".concat(Math.round("".concat(e,"e").concat(t)),"e-").concat(t))}function ce(e,t,a,r,n,o,i,c,s,l){var d=[{y:t}];c<=e.getFullYear()?d[0].x="".concat(e.getMonth()+1,"/").concat(e.getDate(),"/").concat(e.getFullYear()):d[0].x="1/1/".concat(c);for(var u,b,h=oe(s),j=24,p=a,x=l,m=19500,g=(u=o-i,(b=j)*(Math.pow(1+u,1/b)-1)),O=1;O<=h;O+=1){x+O>50&&(m=26e3);var y=2*new Date(d[O-1].x).getMonth();new Date(d[O-1].x).getDay()>15&&(y+=1);for(var v=d[O-1].y,f=y;f<j;f+=1){v+=v*(g/j);var w=p/j*r;v+=w<m/j?w:m/j}d[O]={x:"1/1/".concat(c+O),y:ie(v,2)},p*=1+n}return d}var se={acknowledgedDisclaimer:!1,averageAnnual401kFees:.19,averageAnnual401kGrowth:5,averageRaise:3,averageEmployerESOPContribution:10,averageShareGrowth:6,initYear:new Date(Date.now()).getFullYear(),employee401kContribution:3,selectedTab:0,startDate:new Date(Date.now()),starting401kBalance:0,startingSalary:31200,startingESOPAccountValue:0,yearsToCalculate:30,currentEmployeeAge:25},le=function(){function e(){var t=this;Object(ae.a)(this,e),this.acknowledgedDisclaimer=se.acknowledgedDisclaimer,this.averageAnnual401kFees=se.averageAnnual401kFees,this.averageAnnual401kGrowth=se.averageAnnual401kGrowth,this.averageEmployerESOPContribution=se.averageEmployerESOPContribution,this.averageRaise=se.averageRaise,this.averageShareGrowth=se.averageShareGrowth,this.currentEmployeeAge=se.currentEmployeeAge,this.initYear=se.initYear,this.employee401kContribution=se.employee401kContribution,this.selectedTab=se.selectedTab,this.startDate=se.startDate,this.starting401kBalance=se.starting401kBalance,this.startingSalary=se.startingSalary,this.startingESOPAccountValue=se.startingESOPAccountValue,this.yearsToCalculate=se.yearsToCalculate,this.handleInputsUpdate=function(e,a){t[e]=a},this.handleTabChange=function(e,a){t.selectedTab=a},this.tabs=[j.USAGE_GUIDE,j.ESOP_GROWTH,j.ONLY_401K,j.COMBINED_INVESTMENTS]}return Object(re.a)(e,[{key:"dataPoints401k",get:function(){return ce(this.startDate,this.starting401kBalance,this.startingSalary,this.employee401kContribution/100,this.averageRaise/100,this.averageAnnual401kGrowth/100,this.averageAnnual401kFees/100,this.initYear,this.yearsToCalculate,this.currentEmployeeAge)}},{key:"dataPointsESOP",get:function(){return function(e,t,a,r,n,o,i,c){var s=[{}],l=i;l<=e.getFullYear()?(l=e.getFullYear(),s[0].x="".concat(e.getMonth()+1,"/").concat(e.getDate(),"/").concat(e.getFullYear())):s[0].x="1/1/".concat(l),s[0].y=t;for(var d=r,u=1;u<=oe(c);u+=1){var b=s[u-1].y*(1+a);b+=d*o*U(H(e),l-1+u),s[u]={x:"1/1/".concat(l+u),y:ie(b,2)},d+=d*n}return s}(this.startDate,this.startingESOPAccountValue,this.averageShareGrowth/100,this.startingSalary,this.averageRaise/100,this.averageEmployerESOPContribution/100,this.initYear,this.yearsToCalculate)}},{key:"selectedTabName",get:function(){return this.tabs[this.selectedTab]}}]),e}();Object(ne.i)(le,{dataPoints401k:ne.f,dataPointsESOP:ne.f,acknowledgedDisclaimer:ne.n,averageAnnual401kFees:ne.n,averageAnnual401kGrowth:ne.n,averageEmployerESOPContribution:ne.n,averageRaise:ne.n,averageShareGrowth:ne.n,currentEmployeeAge:ne.n,initYear:ne.n,employee401kContribution:ne.n,selectedTab:ne.n,selectedTabName:ne.f,startDate:ne.n,starting401kBalance:ne.n,startingSalary:ne.n,startingESOPAccountValue:ne.n,yearsToCalculate:ne.n});var de=new le;i.a.render(Object(v.jsx)(c.b,{calculatorStore:de,children:Object(v.jsx)(te,{})}),document.getElementById("root"))}},[[344,1,2]]]);
//# sourceMappingURL=main.8836242e.chunk.js.map