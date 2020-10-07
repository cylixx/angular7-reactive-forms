export class SummonModel {
    header: Header;
    data: Data;
    status: StatusSummon;
}

export class Header {
    serviceId: string;
    productCode: string;
    transactionId: string;
}

export class Data {
    items: Item[];
    status: Status;
    additionalProperties: AdditionalProperties;
    metadata: Metadata;
}

export class StatusSummon {
    code: string;
    message: string;
}

export class Item {
    offenceType4: string;
    permSpeed: string;
    actSpeed: string;
    itemAttributes: ItemAttributes;
    offenceLoc: string;
    itemNo: string;
    summonDate: string;
    distCode: string;
    summonType: string;
    hbtlOffndr: string;
    itemAmount: number;
    itemAttributesCount: number;
    summonAmt: string;
    offenceType1: string;
    offenceCode1: string;
    offenceType2: string;
    offenceCode2: string;
    offenceType3: string;
    category: string;
    offenceCode3: string;
    offenceCode4: string;
    respCode: string;
}

export class ItemAttributes {
    attribute5: string;
    attribute4: string;
    attribute7: string;
    attribute6: string;
    attribute1: string;
    attribute3: string;
    attribute2: string;
}

export class AdditionalProperties {
    serviceFee: number;
    total: number;
    deliveryFee: number;
    foreignCardSurcharge: number;
    serviceFeeTax: number;
    subTotal: number;
    deliveryFeeTax: number;
}

export class Metadata {
    count: number;
}

export class Status {
    code: string;
    message: string;
}