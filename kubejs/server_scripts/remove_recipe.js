const id = ["minecraft:bucket"];

id.forEach((item) => {
   ServerEvents.recipes((e) => {
      e.remove({ id: item });
   });
});
