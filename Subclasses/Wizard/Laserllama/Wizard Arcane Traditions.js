var iFileName = "Wizard Arcane Traditions.js";
RequiredSheetVersion("13.0.6")

SourceList["LLWAT"] = {
	name: "Laserllama - Wizard Arcane Traditions",
	abbreviation: "LLWAT",
	abbreviationSpellsheet: "W",
	date: "2/5/22",
	group: "GM Binder",
	url: "https://www.gmbinder.com/profile/laserllama",
}

// Hedge Magic
AddSubClass("wizard", "hedgemagic", {
	regExpSearch: /(hedge) *(magic|wizard)?/i,
	subname: "Hedge Magic",
	fullname: "Hedge Wizard",
	source: ["LLWAT", 1],
	features: {
		"subclassfeature2": {
			name: "Cantrip Savant",
			source: ["LLWAT", 1],
			minlevel: 2,
			description: desc([ 
				"I know one cantrip of my choice from any spell list",
				"It counts as a wizard spell for me, but doesn't count against my Cantrips Known",
				"I learn additional cantrips at 6th level, 10th level, and 14th level",
			]),
			spellcastingBonus: [{
				name: "Cantrip Savant",
				"class": "any",
				level: [0, 0],
				times: [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4]
			}]
		},
		"subclassfeature2.1": {
			name: "Self-Taught",
			source: ["LLWAT", 1],
			minlevel: 2,
			description: desc([
				"The time I spend to copy any spell equal or lower than half my prof bonus is halved",
				"Additionally, the cost of the materials and inks is reduced by 50 gold"
			])
		},
		"subclassfeature6": {
			name: "On the Fly",
			source: ["LLWAT", 1],
			minlevel: 6,
			description: desc([
				"I can use my action to cast any 2nd-level (or lower) spell from my spellbook without preparing it",
				"The spell must have a casting time of one action",
				"I can cast a spell this way Int mod times per long rest",
				"Increases to 3rd-level at 10th, 4th-level at 14th, and 5th-level at 18th"
			]),
			usages: "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery: "long rest"
		},
		"subclassfeature10": {
			name : "Hardy Magic",
			source: ["LLWAT", 1],
			minlevel: 10,
			description: desc([
				"When I make a Constitution saving throw to maintain concentration",
				"I can use my reaction to gain a bonus equal to my Int mod (min 1)"
			]),
			action: [["reaction", ""]]
		},
		"subclassfeature14" : {
			name: "Arcane Conservation",
			source: ["LLWAT", 1],
			minlevel: 14,
			description: desc([
				"When I cast a wizard spell of 4th-level or lower and the spell fails I regain one spell slot",
				"The spell slot regained must be of a lower level than the slot used to cast the spell",
				"The failed spell can be cast with a slot higher than 4th-level",
				"Increases to 5th-level at 18th"
			])
		}
	}
});
// Ritualist
AddSubClass("wizard", "ritualist", {
	regExpSearch: /(ritualist)/i,
	subname: "Ritualist",
	fullname: "Ritualist",
	source: ["LLWAT", 2],
	features: {
		"subclassfeature2": {
			name: "Ritual Savant",
			source: ["LLWAT", 2],
			minlevel: 2,
			description: desc([ 
				"The gold and time I must send to copy a ritual spell is halved"
			])
		},
		"subclassfeature2.1": {
			name: "Arcane Anthology",
			source: ["LLWAT", 2],
			minlevel: 2,
			description: desc([
				"I can copy ritual spells from any class, as long as I follow normal rules",
				"Any non-wizard spells I copy count as wizard spells for me,",
				"but can only be cast as rituals"
			]),
			spellcastingBonus: [{
				name: "Arcane Anthology",
				"class": "any",
				level: [1, 1],
				ritual: true,
				times: 2
			}]
		},
		"subclassfeature6": {
			name: "Accelerated Rituals",
			source: ["LLWAT", 2],
			minlevel: 6,
			description: desc([
				"I can cast any 1st-level ritual without the additional casting time",
				"Increases to 2nd-level at 10th, 3rd-level at 14th, and 4th-level at 18th"
			]),
			usages: "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery: "long rest"
		},
		"subclassfeature10": {
			name : "Formulaic Breakthrough",
			source: ["LLWAT", 2],
			minlevel: 10,
			description: desc([
				"I can cast any 1st-level spell as a ritual so long as it doesnt deal damage",
				"or require a saving throw",
				"Increases to 2nd-level at 14th and 3rd-level at 18th"
			])
		},
		"subclassfeature14" : {
			name: "Master Ritualist",
			source: ["LLWAT", 2],
			minlevel: 14,
			description: desc([
				"I can concentrate on two ritual spells at once",
				"The total levels of the spells cannot exceed my Int mod (min 1)",
				"and concentration saves for both spells are made as one",
				"Additionally, when I cast a ritual spell the duration is doubled"
			])
		}
	}
});
// Biomancy
AddSubClass("wizard", "biomancy", {
	regExpSearch: /(biomancy|biomancer)/i,
	subname: "School of Biomancy",
	fullname: "Biomancer",
	source: ["LLWAT", 3],
	features: {
		"subclassfeature2": {
			name: "Biomancy Savant",
			source: ["LLWAT", 3],
			minlevel: 2,
			description: desc([ 
				""
			]),
			spellcastingExtra: ["false life", "jump", "longstrider",
			                    "alter self", "enlarge/reduce", "spider climb",
								"haste", "life transference", "water breathing",
								"blight", "polymorph", "stoneskin",
								"reincarnate", "skill empowerment",
								"create homunculus", "flesh to stone",
								"regenerate", "simulacrum",
								"clone", "horrid wilting",
								"shapechange", "true polymorph"
							   ]
		},
		"subclassfeature2.1": {
			name: "Self-Taught",
			source: ["LLWAT", 1],
			minlevel: 2,
			description: desc([
				"The time I spend to copy any spell equal or lower than half my prof bonus is halved",
				"Additionally, the cost of the materials and inks is reduced by 50 gold"
			])
		},
		"subclassfeature6": {
			name: "On the Fly",
			source: ["LLWAT", 1],
			minlevel: 6,
			description: desc([
				"I can use my action to cast any 2nd-level (or lower) spell from my spellbook without preparing it",
				"The spell must have a casting time of one action",
				"I can cast a spell this way Int mod times per long rest",
				"Increases to 3rd-level at 10th, 4th-level at 14th, and 5th-level at 18th"
			]),
			usages: "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery: "long rest"
		},
		"subclassfeature10": {
			name : "Hardy Magic",
			source: ["LLWAT", 1],
			minlevel: 10,
			description: desc([
				"When I make a Constitution saving throw to maintain concentration",
				"I can use my reaction to gain a bonus equal to my Int mod (min 1)"
			]),
			action: [["reaction", ""]]
		},
		"subclassfeature14" : {
			name: "Arcane Conservation",
			source: ["LLWAT", 1],
			minlevel: 14,
			description: desc([
				"When I cast a wizard spell of 4th-level or lower and the spell fails I regain one spell slot",
				"The spell slot regained must be of a lower level than the slot used to cast the spell",
				"The failed spell can be cast with a slot higher than 4th-level",
				"Increases to 5th-level at 18th"
			])
		}
	}
});