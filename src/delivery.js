function deliveryDate (anOrder, isRush) {
  if (isRush) {
    return anOrder.placedOn.plusDays(1 + getRushDeliveryTime(anOrder));
  }
  else {
    return anOrder.placedOn.plusDays(2 + getDeliveryTime(anOrder));
  }
}

module.exports= {
  deliveryDate,
}

function isIncludes(anOrder, value){
  return value.includes(anOrder.deliveryState);
}

function getDeliveryTime(anOrder) {
  let deliveryTime;
  if (isIncludes(anOrder,['MA','CT','NY'])) {
    deliveryTime = 2;
    return deliveryTime;
  }

  if (isIncludes(anOrder,['ME','NH'])) {
    deliveryTime = 3;
    return deliveryTime;
  }
  deliveryTime = 4;
  return deliveryTime;
}

function getRushDeliveryTime(anOrder) {
  let deliveryTime;
  if (isIncludes(anOrder,['MA','CT'])) {
    deliveryTime = 1;
    return deliveryTime;
  }
 if (isIncludes(anOrder,['NY','NH'])) {
    deliveryTime = 2;
    return deliveryTime;
  }
  deliveryTime = 3;
  return deliveryTime;
}

