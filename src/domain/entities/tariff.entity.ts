

export class Tariff {

    constructor(
        public id: number,
        public fcpy_activity_id: number,
        public fcpy_work_center_id: number,
        public currency: string,
        public price: number,
        public starting_range: number,
        public end_range: number,
        public created_at: Date|null,
        public updated_at: Date|null,
        public apply_productivity?: boolean,
        public base_amount?: number,
        public productivity_factor?: number,
        public extra_payment_value?: number,
    ){}

    

     static fromObject( object: { [key: string]: any}){
        
        const {id, fcpy_activity_id,fcpy_work_center_id,currency,price,starting_range,end_range,created_at,updated_at,apply_productivity,base_amount,productivity_factor,extra_payment_value} = object
        
        // Parsea extra_payment_value a número, ya que podría venir como string desde una fuente externa
        const parsedExtraPaymentValue = parseFloat(extra_payment_value);
        const parsedApplyProductivity = apply_productivity !== null ? apply_productivity : false;

        const parsePrice = parseFloat(price);
        return new Tariff(id, fcpy_activity_id,fcpy_work_center_id,currency,parsePrice,starting_range,end_range,created_at,updated_at,apply_productivity,base_amount,parsedApplyProductivity,parsedExtraPaymentValue)

    }
}