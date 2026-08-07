window.DFC=window.DFC||{};
window.DFC.getUnits=()=>window.DFC_LIBRARY?.units||[];
window.DFC.getSkills=()=>window.DFC.getUnits().flatMap(u=>(u.skills||[]).map(s=>({...s,unitId:u.id,unitLabel:u.label})));
window.DFC.getSkill=id=>window.DFC.getSkills().find(s=>s.id===id)||null;
window.DFC.getPassages=id=>window.DFC.getSkill(id)?.passages||[];
window.DFC.getPassage=id=>{for(const s of window.DFC.getSkills()){const p=(s.passages||[]).find(x=>x.id===id);if(p)return p;}return null;};
