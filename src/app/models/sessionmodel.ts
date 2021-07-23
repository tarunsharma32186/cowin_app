export class Session {
    center_id: number | any;
    name: string| any;
    address: string| any;
    state_name: string| any;
    district_name: string| any;
    block_name: string| any;
    pincode: number| any;
    from: string| any;
    to: string| any;
    lat: number| any;
    long: number| any;
    fee_type: string| any;
    session_id: string| any;
    date: string| any;
    available_capacity_dose1: number| any;
    available_capacity_dose2: number| any;
    available_capacity: number| any;
    fee: string| any;
    min_age_limit: number| any;
    vaccine: string| any;
    slots: string[]| any;
}

export class RootObjectSession {
    sessions: Session[]| any;
}



