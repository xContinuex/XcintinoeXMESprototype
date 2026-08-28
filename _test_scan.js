// 模拟 scanBatchAdd('outbound') 逻辑验证批次号
const batchLib = [
  { batch:'P240711-001', matCode:'M1001', matName:'贴片电阻', spec:'0603-10KΩ', unit:'pcs', inspect:'合格', arrival:'采购到货', loc:'成品仓/A区/货架1/库位01', stock:3800 },
];
let outboundEditDetails = [];
const code = 'P240711-001';
const lib = batchLib.find(b=>b.batch===code);
if(lib){
  outboundEditDetails.push({ batch:lib.batch, matCode:lib.matCode, matName:lib.matName, spec:lib.spec, unit:lib.unit,
    inspect:lib.inspect, arrival:lib.arrival, loc:lib.loc, qty:0, returned:0 });
}
console.log('添加后明细对象:', JSON.stringify(outboundEditDetails[0]));
// 模拟渲染模板
const d = outboundEditDetails[0];
const rowHtml = `<tr><td>${d.batch}</td><td>${d.matCode}</td><td>${d.matName}</td><td>${d.spec}</td><td>${d.qty}</td><td>${d.unit}</td><td>${d.inspect}</td><td>${d.loc}</td><td>${d.returned}</td></tr>`;
console.log('渲染HTML:', rowHtml);
console.log('批次号是否在HTML中:', rowHtml.includes(d.batch) ? 'YES' : 'NO');
