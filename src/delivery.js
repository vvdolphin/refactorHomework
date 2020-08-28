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

function getDeliveryTime(anOrder) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
    return deliveryTime;
  }
  if ([
    'ME',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
    return deliveryTime;
  }
  deliveryTime = 4;
  return deliveryTime;
}

function getRushDeliveryTime(anOrder) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  }
  else if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else {
    deliveryTime = 3;
  }
  return deliveryTime;
}

