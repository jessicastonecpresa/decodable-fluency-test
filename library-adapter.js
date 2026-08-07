// Decodable Fluency Center — Library Adapter v2.1
// Keeps skills grouped by unit and in instructional order.
// Load AFTER library.js and BEFORE the main app code.

window.DFC = window.DFC || {};

window.DFC.getUnits = function () {
  const units = (window.DFC_LIBRARY && window.DFC_LIBRARY.units) || [];
  return units.map((unit, unitIndex) => ({
    ...unit,
    unitOrder: unit.order ?? (unitIndex + 1)
  })).sort((a, b) => a.unitOrder - b.unitOrder);
};

window.DFC.getSkills = function () {
  const result = [];

  window.DFC.getUnits().forEach((unit, unitIndex) => {
    const unitOrder = unit.order ?? (unitIndex + 1);

    const skills = [...(unit.skills || [])].sort(
      (a, b) => (a.order ?? 999) - (b.order ?? 999)
    );

    skills.forEach((skill, skillIndex) => {
      const skillOrder = skill.order ?? (skillIndex + 1);

      result.push({
        ...skill,
        unitId: unit.id,
        unitLabel: unit.label,
        unitOrder: unitOrder,
        skillOrder: skillOrder,

        // index.html currently sorts on "order".
        // Give every skill a unique global order so units never interleave.
        order: (unitOrder * 1000) + skillOrder
      });
    });
  });

  return result.sort((a, b) => a.order - b.order);
};

window.DFC.getSkill = function (skillId) {
  return window.DFC.getSkills().find(skill => skill.id === skillId) || null;
};

window.DFC.getPassages = function (skillId) {
  const skill = window.DFC.getSkill(skillId);
  if (!skill) return [];

  return [...(skill.passages || [])].sort(
    (a, b) => (a.number ?? 999) - (b.number ?? 999)
  );
};

window.DFC.getPassage = function (passageId) {
  for (const skill of window.DFC.getSkills()) {
    const passage = (skill.passages || []).find(p => p.id === passageId);
    if (passage) return passage;
  }
  return null;
};
