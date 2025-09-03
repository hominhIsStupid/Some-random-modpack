// priority: 0

ServerEvents.recipes((e) => {
   e.replaceInput(
      { input: "#forge:dusts/iron" },
      "#forge:dusts/iron",
      "mekanism:dust_iron"
   );

   e.replaceInput(
      { input: "#forge:plates/iron" },
      "#forge:plates/iron",
      "immersiveengineering:plate_iron"
   );
   e.replaceOutput(
      { output: "#forge:plates/iron" },
      "#forge:plates/iron",
      "immersiveengineering:plate_iron"
   );

   e.replaceInput(
      { input: "#forge:plates/steel" },
      "#forge:plates/steel",
      "immersiveengineering:plate_steel"
   );
   e.replaceOutput(
      { output: "#forge:plates/steel" },
      "#forge:plates/steel",
      "immersiveengineering:plate_steel"
   );

   e.replaceInput(
      { input: "#forge:ingots/steel" },
      "#forge:ingots/steel",
      "immersiveengineering:ingot_steel"
   );
   e.replaceOutput(
      { output: "#forge:ingots/steel" },
      "#forge:ingots/steel",
      "immersiveengineering:ingot_steel"
   );
});
