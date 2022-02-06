var iFileName = "Hedge Magic.js";
RequiredSheetVersion("13.0.6")

SourceList["LLWAT"] = {
	name: "Laserllama - Wizard Arcane Traditions",
	abbreviation: "LLWAT",
	abbreviationSpellsheet: "W",
	date: "2/5/22",
	group: "GM Binder",
	url: "https://www.gmbinder.com/profile/laserllama",
}

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
				"It counts as a wizard spell for me, but doesn't count against my total number of Cantrips Known",
				"I learn additional cantrips at 6th level, 10th level, and 14th level",
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
				"The time I spend to copy any spell of a level equal or lower than half my proficiency bonus is halved",
				"Additionally, the cost of the materials and inks is reduced by 50 gold"
			]),
		},
		"subclassfeature6": {
			name: "On the Fly",
			source: ["LLWAT", 1],
			minlevel: 6,
			description: desc([
				"I can use my action to cast any spell of 2nd-level or lower from my spellbook without preparing it",
				"The spell must have a casting time of one action",
				"I can cast a spell this way Int mod times per long rest",
				"The level of spell I can cast increases to 3rd-level at 10th level, 4th-level at 14th, and 5th-level at 18th"
			]),
			usages: "Intelligence modifier per ",
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
			action: [["reaction", "Hardy Magic"]]

		},
		"subclassfeature14" : {
			name: "Arcane Conservation",
			source: ["LLWAT", 1],
			minlevel: 14,
			description: desc([
				"When I cast a wizard spell of 4th-level or lower and the spell fails I regain one spell slot",
				"The spell slot regained must be of a lower level than the slot used to cast the spell",
				"The failed spell can be cast with a slot higher than 4th-level",
				"When I reach 18th level in this class, this ability affects spells of 5th-level and lower"
			])
		}
	}
});