define(["indicator_base","highstock"],function(a){function b(b,c){var d=c,e=a.extractPriceForAppliedTO(a.OPEN,b,d),f=a.extractPriceForAppliedTO(a.CLOSE,b,d),g=a.extractPriceForAppliedTO(a.LOW,b,d),h=a.extractPriceForAppliedTO(a.HIGH,b,d),i=Math.abs(100*(e-f)/e),j=Math.abs(100*(e-g)/e),k=Math.abs(100*(f-g)/f),l=Math.abs(e-f),m=h-Math.max(e,f),n=m>=2*l,o=1>=i&&1>=j&&.5>=k;return n&&o}var c={},d={};return{init:function(){!function(a,e,f){function g(a,e){{var g=this;g.chart}for(var h in d)if(d[h]&&d[h].options&&d[h].options.data&&d[h].options.data.length>0&&c[h].parentSeriesID==g.options.id){var i=g.options.data,j=f.findDataUpdatedDataPoint(i,a);if(j>=1){var k=null;b(i,j)&&(k={x:i[j].x||i[j][0],title:'<span style="color : red">SS</span>',text:"Shooting Star"});for(var l=-1,m=d[h].data.length-1;m>=0;m--)if((d[h].data[m].x||d[h].data[m][0])==(i[j].x||i[j][0])){l=m;break}k?(e&&l>=0&&d[h].data[l].remove(),d[h].addPoint(k)):l>=0&&d[h].data[l].remove()}}}a&&!a.Series.prototype.addCDLSHOOTINGSTAR&&(a.Series.prototype.addCDLSHOOTINGSTAR=function(a){var f=this.options.id;a=e.extend({parentSeriesID:f},a);var g="_"+(new Date).getTime(),h=this.options.data||[];if(h&&h.length>0){for(var i=[],j=2;j<h.length;j++)b(h,j)&&i.push({x:h[j].x||h[j][0],title:'<span style="color : red">SS</span>',text:"Shooting Star"});var k=this.chart;c[g]=a;d[g]=k.addSeries({id:g,name:"CDLSHOOTINGSTAR",data:i,type:"flags",onSeries:f,shape:"flag",turboThreshold:0},!1,!1),e(d[g]).data({isIndicator:!0,indicatorID:"cdlshootingstar",parentSeriesID:a.parentSeriesID}),k.redraw()}return g},a.Series.prototype.removeCDLSHOOTINGSTAR=function(a){var b=this.chart;c[a]=null,b.get(a).remove(!1),d[a]=null,b.redraw()},a.wrap(a.Series.prototype,"addPoint",function(a,b,d,e,h){a.call(this,b,d,e,h),f.checkCurrentSeriesHasIndicator(c,this.options.id)&&g.call(this,b)}),a.wrap(a.Point.prototype,"update",function(a,b,d,e){a.call(this,b,d,e),f.checkCurrentSeriesHasIndicator(c,this.series.options.id)&&g.call(this.series,b,!0)}))}(Highcharts,jQuery,a)}}});