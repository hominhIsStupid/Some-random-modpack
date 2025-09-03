// all immersive engineering stuff (recipes) goes here

const hammer_crushing = (input, output) => {
   ServerEvents.recipes((e) => {
      return e.custom({
         type: "immersiveengineering:hammer_crushing",
         input: input,
         result: output,
      });
   });
};
const hammer_shaped = (key, pattern, output) => {
   ServerEvents.recipes((e) => {
      return e.custom({
         type: "minecraft:crafting_shaped",
         category: "misc",
         key: key,
         pattern: pattern,
         result: output,
         show_notification: true,
      });
   });
};

const marterial = global.marterial;

marterial.forEach((m) => {
   const smelt_input = [
      `minecraft:${m}_ore`,
      `minecraft:deepslate_${m}_ore`,
      `minecraft:nether_${m}_ore`,
      `ad_astra:moon_${m}_ore`,
      `ad_astra:mars_${m}_ore`,
      `ad_astra:mercury_${m}_ore`,
      `ad_astra:glacio_${m}_ore`,
      `ad_astra:venus_${m}_ore`,
      `minecraft:raw_${m}`,
   ];

   smelt_input.forEach((item) => {
      ServerEvents.recipes((e) => {
         // remove every smelting and blasting recipes from ores
         try {
            e.remove([
               { input: String(item), type: "minecraft:smelting" },
               { input: String(item), type: "minecraft:blasting" },
            ]);
         } catch (error) {}
      });
   });
});

ServerEvents.recipes((e) => {
   // remove all crafting from engineer hammer to add our own recipe
   e.remove([
      { type: "immersiveengineering:hammer_crushing" },
      {
         input: "immersiveengineering:hammer",
         type: "minecraft:crafting_shapeless",
      },
   ]);
});

// all hammer recipe go here
// crushing
hammer_crushing({ tag: "forge:ingots/iron" }, { item: "mekanism:dust_iron" });

// plating
hammer_shaped(
   {
      h: { tag: "immersiveengineering:tools/hammers" },
      m: { item: "minecraft:iron_ingot" },
   },
   [" h ", " m ", " m "],
   { item: "immersiveengineering:plate_iron" }
);

// other
hammer_shaped(
   {
      h: { tag: "immersiveengineering:tools/hammers" },
      p: { item: "immersiveengineering:plate_iron" },
   },
   ["php", " p "],
   { item: "minecraft:bucket" }
);

console.log("marterial_progression loaded");

const example = {
   type: "minecraft:crafting_shaped",
   category: "misc",
   key: {
      h: { tag: "immersiveengineering:tools/hammers" },
      i: { tag: "forge:ingots/steel" },
      s: { tag: "forge:rods/steel" },
   },
   pattern: ["  h", " s ", "i  "],
   result: { item: "immersiveengineering:gunpart_barrel" },
   show_notification: true,
};
