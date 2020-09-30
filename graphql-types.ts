export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  api_timestamptz: any;
  api_uuid: any;
  api_date: any;
  api_json: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











/** query root */
export type Api = {
  /** fetch data from the table: "guest" */
  guest: Array<Api_Guest>;
  /** fetch aggregated fields from the table: "guest" */
  guest_aggregate: Api_Guest_Aggregate;
  /** fetch data from the table: "guest" using primary key columns */
  guest_by_pk?: Maybe<Api_Guest>;
  /** perform the action: "hello" */
  hello?: Maybe<Api_SampleOutput>;
  /** fetch data from the table: "reservation" */
  reservation: Array<Api_Reservation>;
  /** fetch aggregated fields from the table: "reservation" */
  reservation_aggregate: Api_Reservation_Aggregate;
  /** fetch data from the table: "reservation" using primary key columns */
  reservation_by_pk?: Maybe<Api_Reservation>;
  /** fetch data from the table: "reservation_room" */
  reservation_room: Array<Api_Reservation_Room>;
  /** fetch aggregated fields from the table: "reservation_room" */
  reservation_room_aggregate: Api_Reservation_Room_Aggregate;
  /** fetch data from the table: "reservation_room" using primary key columns */
  reservation_room_by_pk?: Maybe<Api_Reservation_Room>;
  /** fetch data from the table: "room" */
  room: Array<Api_Room>;
  /** fetch aggregated fields from the table: "room" */
  room_aggregate: Api_Room_Aggregate;
  /** fetch data from the table: "room" using primary key columns */
  room_by_pk?: Maybe<Api_Room>;
  /** fetch data from the table: "room_type" */
  room_type: Array<Api_Room_Type>;
  /** fetch aggregated fields from the table: "room_type" */
  room_type_aggregate: Api_Room_Type_Aggregate;
  /** fetch data from the table: "room_type" using primary key columns */
  room_type_by_pk?: Maybe<Api_Room_Type>;
};


/** query root */
export type ApiGuestArgs = {
  distinct_on?: Maybe<Array<Api_Guest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Guest_Order_By>>;
  where?: Maybe<Api_Guest_Bool_Exp>;
};


/** query root */
export type ApiGuest_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Guest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Guest_Order_By>>;
  where?: Maybe<Api_Guest_Bool_Exp>;
};


/** query root */
export type ApiGuest_By_PkArgs = {
  id: Scalars['api_uuid'];
};


/** query root */
export type ApiReservationArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Order_By>>;
  where?: Maybe<Api_Reservation_Bool_Exp>;
};


/** query root */
export type ApiReservation_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Order_By>>;
  where?: Maybe<Api_Reservation_Bool_Exp>;
};


/** query root */
export type ApiReservation_By_PkArgs = {
  id: Scalars['api_uuid'];
};


/** query root */
export type ApiReservation_RoomArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Room_Order_By>>;
  where?: Maybe<Api_Reservation_Room_Bool_Exp>;
};


/** query root */
export type ApiReservation_Room_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Room_Order_By>>;
  where?: Maybe<Api_Reservation_Room_Bool_Exp>;
};


/** query root */
export type ApiReservation_Room_By_PkArgs = {
  reservation_id: Scalars['api_uuid'];
  room_id: Scalars['api_uuid'];
};


/** query root */
export type ApiRoomArgs = {
  distinct_on?: Maybe<Array<Api_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Room_Order_By>>;
  where?: Maybe<Api_Room_Bool_Exp>;
};


/** query root */
export type ApiRoom_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Room_Order_By>>;
  where?: Maybe<Api_Room_Bool_Exp>;
};


/** query root */
export type ApiRoom_By_PkArgs = {
  id: Scalars['api_uuid'];
};


/** query root */
export type ApiRoom_TypeArgs = {
  distinct_on?: Maybe<Array<Api_Room_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Room_Type_Order_By>>;
  where?: Maybe<Api_Room_Type_Bool_Exp>;
};


/** query root */
export type ApiRoom_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Room_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Room_Type_Order_By>>;
  where?: Maybe<Api_Room_Type_Bool_Exp>;
};


/** query root */
export type ApiRoom_Type_By_PkArgs = {
  id: Scalars['api_uuid'];
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Api_Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['api_date']>;
  _gt?: Maybe<Scalars['api_date']>;
  _gte?: Maybe<Scalars['api_date']>;
  _in?: Maybe<Array<Scalars['api_date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['api_date']>;
  _lte?: Maybe<Scalars['api_date']>;
  _neq?: Maybe<Scalars['api_date']>;
  _nin?: Maybe<Array<Scalars['api_date']>>;
};

/** columns and relationships of "guest" */
export type Api_Guest = {
  created_at: Scalars['api_timestamptz'];
  email?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  id: Scalars['api_uuid'];
  last_name: Scalars['String'];
  phone_number: Scalars['Int'];
  /** An array relationship */
  reservations: Array<Api_Reservation>;
  /** An aggregated array relationship */
  reservations_aggregate: Api_Reservation_Aggregate;
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "guest" */
export type Api_GuestReservationsArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Order_By>>;
  where?: Maybe<Api_Reservation_Bool_Exp>;
};


/** columns and relationships of "guest" */
export type Api_GuestReservations_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Order_By>>;
  where?: Maybe<Api_Reservation_Bool_Exp>;
};

/** aggregated selection of "guest" */
export type Api_Guest_Aggregate = {
  aggregate?: Maybe<Api_Guest_Aggregate_Fields>;
  nodes: Array<Api_Guest>;
};

/** aggregate fields of "guest" */
export type Api_Guest_Aggregate_Fields = {
  avg?: Maybe<Api_Guest_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Api_Guest_Max_Fields>;
  min?: Maybe<Api_Guest_Min_Fields>;
  stddev?: Maybe<Api_Guest_Stddev_Fields>;
  stddev_pop?: Maybe<Api_Guest_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Api_Guest_Stddev_Samp_Fields>;
  sum?: Maybe<Api_Guest_Sum_Fields>;
  var_pop?: Maybe<Api_Guest_Var_Pop_Fields>;
  var_samp?: Maybe<Api_Guest_Var_Samp_Fields>;
  variance?: Maybe<Api_Guest_Variance_Fields>;
};


/** aggregate fields of "guest" */
export type Api_Guest_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Api_Guest_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guest" */
export type Api_Guest_Aggregate_Order_By = {
  avg?: Maybe<Api_Guest_Avg_Order_By>;
  count?: Maybe<Api_Order_By>;
  max?: Maybe<Api_Guest_Max_Order_By>;
  min?: Maybe<Api_Guest_Min_Order_By>;
  stddev?: Maybe<Api_Guest_Stddev_Order_By>;
  stddev_pop?: Maybe<Api_Guest_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Api_Guest_Stddev_Samp_Order_By>;
  sum?: Maybe<Api_Guest_Sum_Order_By>;
  var_pop?: Maybe<Api_Guest_Var_Pop_Order_By>;
  var_samp?: Maybe<Api_Guest_Var_Samp_Order_By>;
  variance?: Maybe<Api_Guest_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "guest" */
export type Api_Guest_Arr_Rel_Insert_Input = {
  data: Array<Api_Guest_Insert_Input>;
  on_conflict?: Maybe<Api_Guest_On_Conflict>;
};

/** aggregate avg on columns */
export type Api_Guest_Avg_Fields = {
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "guest" */
export type Api_Guest_Avg_Order_By = {
  phone_number?: Maybe<Api_Order_By>;
};

/** Boolean expression to filter rows from the table "guest". All fields are combined with a logical 'AND'. */
export type Api_Guest_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Api_Guest_Bool_Exp>>>;
  _not?: Maybe<Api_Guest_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Api_Guest_Bool_Exp>>>;
  created_at?: Maybe<Api_Timestamptz_Comparison_Exp>;
  email?: Maybe<Api_String_Comparison_Exp>;
  first_name?: Maybe<Api_String_Comparison_Exp>;
  id?: Maybe<Api_Uuid_Comparison_Exp>;
  last_name?: Maybe<Api_String_Comparison_Exp>;
  phone_number?: Maybe<Api_Int_Comparison_Exp>;
  reservations?: Maybe<Api_Reservation_Bool_Exp>;
  updated_at?: Maybe<Api_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "guest" */
export type Api_Guest_Constraint = 
  /** unique or primary key constraint */
  | 'client_email_phone_number_key'
  /** unique or primary key constraint */
  | 'client_pkey';

/** input type for incrementing integer column in table "guest" */
export type Api_Guest_Inc_Input = {
  phone_number?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "guest" */
export type Api_Guest_Insert_Input = {
  created_at?: Maybe<Scalars['api_timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['api_uuid']>;
  last_name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  reservations?: Maybe<Api_Reservation_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type Api_Guest_Max_Fields = {
  created_at?: Maybe<Scalars['api_timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['api_uuid']>;
  last_name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "guest" */
export type Api_Guest_Max_Order_By = {
  created_at?: Maybe<Api_Order_By>;
  email?: Maybe<Api_Order_By>;
  first_name?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  last_name?: Maybe<Api_Order_By>;
  phone_number?: Maybe<Api_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** aggregate min on columns */
export type Api_Guest_Min_Fields = {
  created_at?: Maybe<Scalars['api_timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['api_uuid']>;
  last_name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "guest" */
export type Api_Guest_Min_Order_By = {
  created_at?: Maybe<Api_Order_By>;
  email?: Maybe<Api_Order_By>;
  first_name?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  last_name?: Maybe<Api_Order_By>;
  phone_number?: Maybe<Api_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** response of any mutation on the table "guest" */
export type Api_Guest_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Api_Guest>;
};

/** input type for inserting object relation for remote table "guest" */
export type Api_Guest_Obj_Rel_Insert_Input = {
  data: Api_Guest_Insert_Input;
  on_conflict?: Maybe<Api_Guest_On_Conflict>;
};

/** on conflict condition type for table "guest" */
export type Api_Guest_On_Conflict = {
  constraint: Api_Guest_Constraint;
  update_columns: Array<Api_Guest_Update_Column>;
  where?: Maybe<Api_Guest_Bool_Exp>;
};

/** ordering options when selecting data from "guest" */
export type Api_Guest_Order_By = {
  created_at?: Maybe<Api_Order_By>;
  email?: Maybe<Api_Order_By>;
  first_name?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  last_name?: Maybe<Api_Order_By>;
  phone_number?: Maybe<Api_Order_By>;
  reservations_aggregate?: Maybe<Api_Reservation_Aggregate_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** primary key columns input for table: "guest" */
export type Api_Guest_Pk_Columns_Input = {
  id: Scalars['api_uuid'];
};

/** select columns of table "guest" */
export type Api_Guest_Select_Column = 
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'first_name'
  /** column name */
  | 'id'
  /** column name */
  | 'last_name'
  /** column name */
  | 'phone_number'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "guest" */
export type Api_Guest_Set_Input = {
  created_at?: Maybe<Scalars['api_timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['api_uuid']>;
  last_name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type Api_Guest_Stddev_Fields = {
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "guest" */
export type Api_Guest_Stddev_Order_By = {
  phone_number?: Maybe<Api_Order_By>;
};

/** aggregate stddev_pop on columns */
export type Api_Guest_Stddev_Pop_Fields = {
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "guest" */
export type Api_Guest_Stddev_Pop_Order_By = {
  phone_number?: Maybe<Api_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Api_Guest_Stddev_Samp_Fields = {
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "guest" */
export type Api_Guest_Stddev_Samp_Order_By = {
  phone_number?: Maybe<Api_Order_By>;
};

/** aggregate sum on columns */
export type Api_Guest_Sum_Fields = {
  phone_number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "guest" */
export type Api_Guest_Sum_Order_By = {
  phone_number?: Maybe<Api_Order_By>;
};

/** update columns of table "guest" */
export type Api_Guest_Update_Column = 
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'first_name'
  /** column name */
  | 'id'
  /** column name */
  | 'last_name'
  /** column name */
  | 'phone_number'
  /** column name */
  | 'updated_at';

/** aggregate var_pop on columns */
export type Api_Guest_Var_Pop_Fields = {
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "guest" */
export type Api_Guest_Var_Pop_Order_By = {
  phone_number?: Maybe<Api_Order_By>;
};

/** aggregate var_samp on columns */
export type Api_Guest_Var_Samp_Fields = {
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "guest" */
export type Api_Guest_Var_Samp_Order_By = {
  phone_number?: Maybe<Api_Order_By>;
};

/** aggregate variance on columns */
export type Api_Guest_Variance_Fields = {
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "guest" */
export type Api_Guest_Variance_Order_By = {
  phone_number?: Maybe<Api_Order_By>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Api_Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Api_Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['api_json']>;
  _gt?: Maybe<Scalars['api_json']>;
  _gte?: Maybe<Scalars['api_json']>;
  _in?: Maybe<Array<Scalars['api_json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['api_json']>;
  _lte?: Maybe<Scalars['api_json']>;
  _neq?: Maybe<Scalars['api_json']>;
  _nin?: Maybe<Array<Scalars['api_json']>>;
};

/** column ordering options */
export type Api_Order_By = 
  /** in the ascending order, nulls last */
  | 'asc'
  /** in the ascending order, nulls first */
  | 'asc_nulls_first'
  /** in the ascending order, nulls last */
  | 'asc_nulls_last'
  /** in the descending order, nulls first */
  | 'desc'
  /** in the descending order, nulls first */
  | 'desc_nulls_first'
  /** in the descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "reservation" */
export type Api_Reservation = {
  arrival_date: Scalars['api_date'];
  /** An object relationship */
  client: Api_Guest;
  created_at: Scalars['api_timestamptz'];
  departure_date: Scalars['api_date'];
  guest_id: Scalars['api_uuid'];
  id: Scalars['api_uuid'];
  note: Scalars['String'];
  /** An array relationship */
  reservation_rooms: Array<Api_Reservation_Room>;
  /** An aggregated array relationship */
  reservation_rooms_aggregate: Api_Reservation_Room_Aggregate;
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "reservation" */
export type Api_ReservationReservation_RoomsArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Room_Order_By>>;
  where?: Maybe<Api_Reservation_Room_Bool_Exp>;
};


/** columns and relationships of "reservation" */
export type Api_ReservationReservation_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Room_Order_By>>;
  where?: Maybe<Api_Reservation_Room_Bool_Exp>;
};

/** aggregated selection of "reservation" */
export type Api_Reservation_Aggregate = {
  aggregate?: Maybe<Api_Reservation_Aggregate_Fields>;
  nodes: Array<Api_Reservation>;
};

/** aggregate fields of "reservation" */
export type Api_Reservation_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Api_Reservation_Max_Fields>;
  min?: Maybe<Api_Reservation_Min_Fields>;
};


/** aggregate fields of "reservation" */
export type Api_Reservation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Api_Reservation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reservation" */
export type Api_Reservation_Aggregate_Order_By = {
  count?: Maybe<Api_Order_By>;
  max?: Maybe<Api_Reservation_Max_Order_By>;
  min?: Maybe<Api_Reservation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "reservation" */
export type Api_Reservation_Arr_Rel_Insert_Input = {
  data: Array<Api_Reservation_Insert_Input>;
  on_conflict?: Maybe<Api_Reservation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "reservation". All fields are combined with a logical 'AND'. */
export type Api_Reservation_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Api_Reservation_Bool_Exp>>>;
  _not?: Maybe<Api_Reservation_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Api_Reservation_Bool_Exp>>>;
  arrival_date?: Maybe<Api_Date_Comparison_Exp>;
  client?: Maybe<Api_Guest_Bool_Exp>;
  created_at?: Maybe<Api_Timestamptz_Comparison_Exp>;
  departure_date?: Maybe<Api_Date_Comparison_Exp>;
  guest_id?: Maybe<Api_Uuid_Comparison_Exp>;
  id?: Maybe<Api_Uuid_Comparison_Exp>;
  note?: Maybe<Api_String_Comparison_Exp>;
  reservation_rooms?: Maybe<Api_Reservation_Room_Bool_Exp>;
  updated_at?: Maybe<Api_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "reservation" */
export type Api_Reservation_Constraint = 
  /** unique or primary key constraint */
  | 'reservation_pkey';

/** input type for inserting data into table "reservation" */
export type Api_Reservation_Insert_Input = {
  arrival_date?: Maybe<Scalars['api_date']>;
  client?: Maybe<Api_Guest_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['api_timestamptz']>;
  departure_date?: Maybe<Scalars['api_date']>;
  guest_id?: Maybe<Scalars['api_uuid']>;
  id?: Maybe<Scalars['api_uuid']>;
  note?: Maybe<Scalars['String']>;
  reservation_rooms?: Maybe<Api_Reservation_Room_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type Api_Reservation_Max_Fields = {
  arrival_date?: Maybe<Scalars['api_date']>;
  created_at?: Maybe<Scalars['api_timestamptz']>;
  departure_date?: Maybe<Scalars['api_date']>;
  guest_id?: Maybe<Scalars['api_uuid']>;
  id?: Maybe<Scalars['api_uuid']>;
  note?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "reservation" */
export type Api_Reservation_Max_Order_By = {
  arrival_date?: Maybe<Api_Order_By>;
  created_at?: Maybe<Api_Order_By>;
  departure_date?: Maybe<Api_Order_By>;
  guest_id?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  note?: Maybe<Api_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** aggregate min on columns */
export type Api_Reservation_Min_Fields = {
  arrival_date?: Maybe<Scalars['api_date']>;
  created_at?: Maybe<Scalars['api_timestamptz']>;
  departure_date?: Maybe<Scalars['api_date']>;
  guest_id?: Maybe<Scalars['api_uuid']>;
  id?: Maybe<Scalars['api_uuid']>;
  note?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "reservation" */
export type Api_Reservation_Min_Order_By = {
  arrival_date?: Maybe<Api_Order_By>;
  created_at?: Maybe<Api_Order_By>;
  departure_date?: Maybe<Api_Order_By>;
  guest_id?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  note?: Maybe<Api_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** response of any mutation on the table "reservation" */
export type Api_Reservation_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Api_Reservation>;
};

/** input type for inserting object relation for remote table "reservation" */
export type Api_Reservation_Obj_Rel_Insert_Input = {
  data: Api_Reservation_Insert_Input;
  on_conflict?: Maybe<Api_Reservation_On_Conflict>;
};

/** on conflict condition type for table "reservation" */
export type Api_Reservation_On_Conflict = {
  constraint: Api_Reservation_Constraint;
  update_columns: Array<Api_Reservation_Update_Column>;
  where?: Maybe<Api_Reservation_Bool_Exp>;
};

/** ordering options when selecting data from "reservation" */
export type Api_Reservation_Order_By = {
  arrival_date?: Maybe<Api_Order_By>;
  client?: Maybe<Api_Guest_Order_By>;
  created_at?: Maybe<Api_Order_By>;
  departure_date?: Maybe<Api_Order_By>;
  guest_id?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  note?: Maybe<Api_Order_By>;
  reservation_rooms_aggregate?: Maybe<Api_Reservation_Room_Aggregate_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** primary key columns input for table: "reservation" */
export type Api_Reservation_Pk_Columns_Input = {
  id: Scalars['api_uuid'];
};

/** columns and relationships of "reservation_room" */
export type Api_Reservation_Room = {
  /** An object relationship */
  reservation: Api_Reservation;
  reservation_id: Scalars['api_uuid'];
  /** An object relationship */
  room: Api_Room;
  room_id: Scalars['api_uuid'];
};

/** aggregated selection of "reservation_room" */
export type Api_Reservation_Room_Aggregate = {
  aggregate?: Maybe<Api_Reservation_Room_Aggregate_Fields>;
  nodes: Array<Api_Reservation_Room>;
};

/** aggregate fields of "reservation_room" */
export type Api_Reservation_Room_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Api_Reservation_Room_Max_Fields>;
  min?: Maybe<Api_Reservation_Room_Min_Fields>;
};


/** aggregate fields of "reservation_room" */
export type Api_Reservation_Room_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Api_Reservation_Room_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reservation_room" */
export type Api_Reservation_Room_Aggregate_Order_By = {
  count?: Maybe<Api_Order_By>;
  max?: Maybe<Api_Reservation_Room_Max_Order_By>;
  min?: Maybe<Api_Reservation_Room_Min_Order_By>;
};

/** input type for inserting array relation for remote table "reservation_room" */
export type Api_Reservation_Room_Arr_Rel_Insert_Input = {
  data: Array<Api_Reservation_Room_Insert_Input>;
  on_conflict?: Maybe<Api_Reservation_Room_On_Conflict>;
};

/** Boolean expression to filter rows from the table "reservation_room". All fields are combined with a logical 'AND'. */
export type Api_Reservation_Room_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Api_Reservation_Room_Bool_Exp>>>;
  _not?: Maybe<Api_Reservation_Room_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Api_Reservation_Room_Bool_Exp>>>;
  reservation?: Maybe<Api_Reservation_Bool_Exp>;
  reservation_id?: Maybe<Api_Uuid_Comparison_Exp>;
  room?: Maybe<Api_Room_Bool_Exp>;
  room_id?: Maybe<Api_Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "reservation_room" */
export type Api_Reservation_Room_Constraint = 
  /** unique or primary key constraint */
  | 'reservation_room_pkey';

/** input type for inserting data into table "reservation_room" */
export type Api_Reservation_Room_Insert_Input = {
  reservation?: Maybe<Api_Reservation_Obj_Rel_Insert_Input>;
  reservation_id?: Maybe<Scalars['api_uuid']>;
  room?: Maybe<Api_Room_Obj_Rel_Insert_Input>;
  room_id?: Maybe<Scalars['api_uuid']>;
};

/** aggregate max on columns */
export type Api_Reservation_Room_Max_Fields = {
  reservation_id?: Maybe<Scalars['api_uuid']>;
  room_id?: Maybe<Scalars['api_uuid']>;
};

/** order by max() on columns of table "reservation_room" */
export type Api_Reservation_Room_Max_Order_By = {
  reservation_id?: Maybe<Api_Order_By>;
  room_id?: Maybe<Api_Order_By>;
};

/** aggregate min on columns */
export type Api_Reservation_Room_Min_Fields = {
  reservation_id?: Maybe<Scalars['api_uuid']>;
  room_id?: Maybe<Scalars['api_uuid']>;
};

/** order by min() on columns of table "reservation_room" */
export type Api_Reservation_Room_Min_Order_By = {
  reservation_id?: Maybe<Api_Order_By>;
  room_id?: Maybe<Api_Order_By>;
};

/** response of any mutation on the table "reservation_room" */
export type Api_Reservation_Room_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Api_Reservation_Room>;
};

/** input type for inserting object relation for remote table "reservation_room" */
export type Api_Reservation_Room_Obj_Rel_Insert_Input = {
  data: Api_Reservation_Room_Insert_Input;
  on_conflict?: Maybe<Api_Reservation_Room_On_Conflict>;
};

/** on conflict condition type for table "reservation_room" */
export type Api_Reservation_Room_On_Conflict = {
  constraint: Api_Reservation_Room_Constraint;
  update_columns: Array<Api_Reservation_Room_Update_Column>;
  where?: Maybe<Api_Reservation_Room_Bool_Exp>;
};

/** ordering options when selecting data from "reservation_room" */
export type Api_Reservation_Room_Order_By = {
  reservation?: Maybe<Api_Reservation_Order_By>;
  reservation_id?: Maybe<Api_Order_By>;
  room?: Maybe<Api_Room_Order_By>;
  room_id?: Maybe<Api_Order_By>;
};

/** primary key columns input for table: "reservation_room" */
export type Api_Reservation_Room_Pk_Columns_Input = {
  reservation_id: Scalars['api_uuid'];
  room_id: Scalars['api_uuid'];
};

/** select columns of table "reservation_room" */
export type Api_Reservation_Room_Select_Column = 
  /** column name */
  | 'reservation_id'
  /** column name */
  | 'room_id';

/** input type for updating data in table "reservation_room" */
export type Api_Reservation_Room_Set_Input = {
  reservation_id?: Maybe<Scalars['api_uuid']>;
  room_id?: Maybe<Scalars['api_uuid']>;
};

/** update columns of table "reservation_room" */
export type Api_Reservation_Room_Update_Column = 
  /** column name */
  | 'reservation_id'
  /** column name */
  | 'room_id';

/** select columns of table "reservation" */
export type Api_Reservation_Select_Column = 
  /** column name */
  | 'arrival_date'
  /** column name */
  | 'created_at'
  /** column name */
  | 'departure_date'
  /** column name */
  | 'guest_id'
  /** column name */
  | 'id'
  /** column name */
  | 'note'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "reservation" */
export type Api_Reservation_Set_Input = {
  arrival_date?: Maybe<Scalars['api_date']>;
  created_at?: Maybe<Scalars['api_timestamptz']>;
  departure_date?: Maybe<Scalars['api_date']>;
  guest_id?: Maybe<Scalars['api_uuid']>;
  id?: Maybe<Scalars['api_uuid']>;
  note?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** update columns of table "reservation" */
export type Api_Reservation_Update_Column = 
  /** column name */
  | 'arrival_date'
  /** column name */
  | 'created_at'
  /** column name */
  | 'departure_date'
  /** column name */
  | 'guest_id'
  /** column name */
  | 'id'
  /** column name */
  | 'note'
  /** column name */
  | 'updated_at';

/** columns and relationships of "room" */
export type Api_Room = {
  created_at: Scalars['api_timestamptz'];
  id: Scalars['api_uuid'];
  /** An array relationship */
  reservation_rooms: Array<Api_Reservation_Room>;
  /** An aggregated array relationship */
  reservation_rooms_aggregate: Api_Reservation_Room_Aggregate;
  room_number: Scalars['Int'];
  /** An object relationship */
  room_type: Api_Room_Type;
  room_type_id: Scalars['api_uuid'];
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "room" */
export type Api_RoomReservation_RoomsArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Room_Order_By>>;
  where?: Maybe<Api_Reservation_Room_Bool_Exp>;
};


/** columns and relationships of "room" */
export type Api_RoomReservation_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Reservation_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Reservation_Room_Order_By>>;
  where?: Maybe<Api_Reservation_Room_Bool_Exp>;
};

/** aggregated selection of "room" */
export type Api_Room_Aggregate = {
  aggregate?: Maybe<Api_Room_Aggregate_Fields>;
  nodes: Array<Api_Room>;
};

/** aggregate fields of "room" */
export type Api_Room_Aggregate_Fields = {
  avg?: Maybe<Api_Room_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Api_Room_Max_Fields>;
  min?: Maybe<Api_Room_Min_Fields>;
  stddev?: Maybe<Api_Room_Stddev_Fields>;
  stddev_pop?: Maybe<Api_Room_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Api_Room_Stddev_Samp_Fields>;
  sum?: Maybe<Api_Room_Sum_Fields>;
  var_pop?: Maybe<Api_Room_Var_Pop_Fields>;
  var_samp?: Maybe<Api_Room_Var_Samp_Fields>;
  variance?: Maybe<Api_Room_Variance_Fields>;
};


/** aggregate fields of "room" */
export type Api_Room_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Api_Room_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "room" */
export type Api_Room_Aggregate_Order_By = {
  avg?: Maybe<Api_Room_Avg_Order_By>;
  count?: Maybe<Api_Order_By>;
  max?: Maybe<Api_Room_Max_Order_By>;
  min?: Maybe<Api_Room_Min_Order_By>;
  stddev?: Maybe<Api_Room_Stddev_Order_By>;
  stddev_pop?: Maybe<Api_Room_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Api_Room_Stddev_Samp_Order_By>;
  sum?: Maybe<Api_Room_Sum_Order_By>;
  var_pop?: Maybe<Api_Room_Var_Pop_Order_By>;
  var_samp?: Maybe<Api_Room_Var_Samp_Order_By>;
  variance?: Maybe<Api_Room_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "room" */
export type Api_Room_Arr_Rel_Insert_Input = {
  data: Array<Api_Room_Insert_Input>;
  on_conflict?: Maybe<Api_Room_On_Conflict>;
};

/** aggregate avg on columns */
export type Api_Room_Avg_Fields = {
  room_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "room" */
export type Api_Room_Avg_Order_By = {
  room_number?: Maybe<Api_Order_By>;
};

/** Boolean expression to filter rows from the table "room". All fields are combined with a logical 'AND'. */
export type Api_Room_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Api_Room_Bool_Exp>>>;
  _not?: Maybe<Api_Room_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Api_Room_Bool_Exp>>>;
  created_at?: Maybe<Api_Timestamptz_Comparison_Exp>;
  id?: Maybe<Api_Uuid_Comparison_Exp>;
  reservation_rooms?: Maybe<Api_Reservation_Room_Bool_Exp>;
  room_number?: Maybe<Api_Int_Comparison_Exp>;
  room_type?: Maybe<Api_Room_Type_Bool_Exp>;
  room_type_id?: Maybe<Api_Uuid_Comparison_Exp>;
  updated_at?: Maybe<Api_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "room" */
export type Api_Room_Constraint = 
  /** unique or primary key constraint */
  | 'room_pkey'
  /** unique or primary key constraint */
  | 'room_room_number_key';

/** input type for incrementing integer column in table "room" */
export type Api_Room_Inc_Input = {
  room_number?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "room" */
export type Api_Room_Insert_Input = {
  created_at?: Maybe<Scalars['api_timestamptz']>;
  id?: Maybe<Scalars['api_uuid']>;
  reservation_rooms?: Maybe<Api_Reservation_Room_Arr_Rel_Insert_Input>;
  room_number?: Maybe<Scalars['Int']>;
  room_type?: Maybe<Api_Room_Type_Obj_Rel_Insert_Input>;
  room_type_id?: Maybe<Scalars['api_uuid']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type Api_Room_Max_Fields = {
  created_at?: Maybe<Scalars['api_timestamptz']>;
  id?: Maybe<Scalars['api_uuid']>;
  room_number?: Maybe<Scalars['Int']>;
  room_type_id?: Maybe<Scalars['api_uuid']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "room" */
export type Api_Room_Max_Order_By = {
  created_at?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  room_number?: Maybe<Api_Order_By>;
  room_type_id?: Maybe<Api_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** aggregate min on columns */
export type Api_Room_Min_Fields = {
  created_at?: Maybe<Scalars['api_timestamptz']>;
  id?: Maybe<Scalars['api_uuid']>;
  room_number?: Maybe<Scalars['Int']>;
  room_type_id?: Maybe<Scalars['api_uuid']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "room" */
export type Api_Room_Min_Order_By = {
  created_at?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  room_number?: Maybe<Api_Order_By>;
  room_type_id?: Maybe<Api_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** response of any mutation on the table "room" */
export type Api_Room_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Api_Room>;
};

/** input type for inserting object relation for remote table "room" */
export type Api_Room_Obj_Rel_Insert_Input = {
  data: Api_Room_Insert_Input;
  on_conflict?: Maybe<Api_Room_On_Conflict>;
};

/** on conflict condition type for table "room" */
export type Api_Room_On_Conflict = {
  constraint: Api_Room_Constraint;
  update_columns: Array<Api_Room_Update_Column>;
  where?: Maybe<Api_Room_Bool_Exp>;
};

/** ordering options when selecting data from "room" */
export type Api_Room_Order_By = {
  created_at?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  reservation_rooms_aggregate?: Maybe<Api_Reservation_Room_Aggregate_Order_By>;
  room_number?: Maybe<Api_Order_By>;
  room_type?: Maybe<Api_Room_Type_Order_By>;
  room_type_id?: Maybe<Api_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** primary key columns input for table: "room" */
export type Api_Room_Pk_Columns_Input = {
  id: Scalars['api_uuid'];
};

/** select columns of table "room" */
export type Api_Room_Select_Column = 
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'room_number'
  /** column name */
  | 'room_type_id'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "room" */
export type Api_Room_Set_Input = {
  created_at?: Maybe<Scalars['api_timestamptz']>;
  id?: Maybe<Scalars['api_uuid']>;
  room_number?: Maybe<Scalars['Int']>;
  room_type_id?: Maybe<Scalars['api_uuid']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type Api_Room_Stddev_Fields = {
  room_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "room" */
export type Api_Room_Stddev_Order_By = {
  room_number?: Maybe<Api_Order_By>;
};

/** aggregate stddev_pop on columns */
export type Api_Room_Stddev_Pop_Fields = {
  room_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "room" */
export type Api_Room_Stddev_Pop_Order_By = {
  room_number?: Maybe<Api_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Api_Room_Stddev_Samp_Fields = {
  room_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "room" */
export type Api_Room_Stddev_Samp_Order_By = {
  room_number?: Maybe<Api_Order_By>;
};

/** aggregate sum on columns */
export type Api_Room_Sum_Fields = {
  room_number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "room" */
export type Api_Room_Sum_Order_By = {
  room_number?: Maybe<Api_Order_By>;
};

/** columns and relationships of "room_type" */
export type Api_Room_Type = {
  beds: Scalars['Int'];
  created_at: Scalars['api_timestamptz'];
  id: Scalars['api_uuid'];
  room_type: Scalars['String'];
  /** An array relationship */
  rooms: Array<Api_Room>;
  /** An aggregated array relationship */
  rooms_aggregate: Api_Room_Aggregate;
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "room_type" */
export type Api_Room_TypeRoomsArgs = {
  distinct_on?: Maybe<Array<Api_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Room_Order_By>>;
  where?: Maybe<Api_Room_Bool_Exp>;
};


/** columns and relationships of "room_type" */
export type Api_Room_TypeRooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Room_Order_By>>;
  where?: Maybe<Api_Room_Bool_Exp>;
};

/** aggregated selection of "room_type" */
export type Api_Room_Type_Aggregate = {
  aggregate?: Maybe<Api_Room_Type_Aggregate_Fields>;
  nodes: Array<Api_Room_Type>;
};

/** aggregate fields of "room_type" */
export type Api_Room_Type_Aggregate_Fields = {
  avg?: Maybe<Api_Room_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Api_Room_Type_Max_Fields>;
  min?: Maybe<Api_Room_Type_Min_Fields>;
  stddev?: Maybe<Api_Room_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Api_Room_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Api_Room_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Api_Room_Type_Sum_Fields>;
  var_pop?: Maybe<Api_Room_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Api_Room_Type_Var_Samp_Fields>;
  variance?: Maybe<Api_Room_Type_Variance_Fields>;
};


/** aggregate fields of "room_type" */
export type Api_Room_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Api_Room_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "room_type" */
export type Api_Room_Type_Aggregate_Order_By = {
  avg?: Maybe<Api_Room_Type_Avg_Order_By>;
  count?: Maybe<Api_Order_By>;
  max?: Maybe<Api_Room_Type_Max_Order_By>;
  min?: Maybe<Api_Room_Type_Min_Order_By>;
  stddev?: Maybe<Api_Room_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<Api_Room_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Api_Room_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<Api_Room_Type_Sum_Order_By>;
  var_pop?: Maybe<Api_Room_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<Api_Room_Type_Var_Samp_Order_By>;
  variance?: Maybe<Api_Room_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "room_type" */
export type Api_Room_Type_Arr_Rel_Insert_Input = {
  data: Array<Api_Room_Type_Insert_Input>;
  on_conflict?: Maybe<Api_Room_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Api_Room_Type_Avg_Fields = {
  beds?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "room_type" */
export type Api_Room_Type_Avg_Order_By = {
  beds?: Maybe<Api_Order_By>;
};

/** Boolean expression to filter rows from the table "room_type". All fields are combined with a logical 'AND'. */
export type Api_Room_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Api_Room_Type_Bool_Exp>>>;
  _not?: Maybe<Api_Room_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Api_Room_Type_Bool_Exp>>>;
  beds?: Maybe<Api_Int_Comparison_Exp>;
  created_at?: Maybe<Api_Timestamptz_Comparison_Exp>;
  id?: Maybe<Api_Uuid_Comparison_Exp>;
  room_type?: Maybe<Api_String_Comparison_Exp>;
  rooms?: Maybe<Api_Room_Bool_Exp>;
  updated_at?: Maybe<Api_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "room_type" */
export type Api_Room_Type_Constraint = 
  /** unique or primary key constraint */
  | 'room_type_pkey'
  /** unique or primary key constraint */
  | 'room_type_room_type_key';

/** input type for incrementing integer column in table "room_type" */
export type Api_Room_Type_Inc_Input = {
  beds?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "room_type" */
export type Api_Room_Type_Insert_Input = {
  beds?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['api_timestamptz']>;
  id?: Maybe<Scalars['api_uuid']>;
  room_type?: Maybe<Scalars['String']>;
  rooms?: Maybe<Api_Room_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type Api_Room_Type_Max_Fields = {
  beds?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['api_timestamptz']>;
  id?: Maybe<Scalars['api_uuid']>;
  room_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "room_type" */
export type Api_Room_Type_Max_Order_By = {
  beds?: Maybe<Api_Order_By>;
  created_at?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  room_type?: Maybe<Api_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** aggregate min on columns */
export type Api_Room_Type_Min_Fields = {
  beds?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['api_timestamptz']>;
  id?: Maybe<Scalars['api_uuid']>;
  room_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "room_type" */
export type Api_Room_Type_Min_Order_By = {
  beds?: Maybe<Api_Order_By>;
  created_at?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  room_type?: Maybe<Api_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** response of any mutation on the table "room_type" */
export type Api_Room_Type_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Api_Room_Type>;
};

/** input type for inserting object relation for remote table "room_type" */
export type Api_Room_Type_Obj_Rel_Insert_Input = {
  data: Api_Room_Type_Insert_Input;
  on_conflict?: Maybe<Api_Room_Type_On_Conflict>;
};

/** on conflict condition type for table "room_type" */
export type Api_Room_Type_On_Conflict = {
  constraint: Api_Room_Type_Constraint;
  update_columns: Array<Api_Room_Type_Update_Column>;
  where?: Maybe<Api_Room_Type_Bool_Exp>;
};

/** ordering options when selecting data from "room_type" */
export type Api_Room_Type_Order_By = {
  beds?: Maybe<Api_Order_By>;
  created_at?: Maybe<Api_Order_By>;
  id?: Maybe<Api_Order_By>;
  room_type?: Maybe<Api_Order_By>;
  rooms_aggregate?: Maybe<Api_Room_Aggregate_Order_By>;
  updated_at?: Maybe<Api_Order_By>;
};

/** primary key columns input for table: "room_type" */
export type Api_Room_Type_Pk_Columns_Input = {
  id: Scalars['api_uuid'];
};

/** select columns of table "room_type" */
export type Api_Room_Type_Select_Column = 
  /** column name */
  | 'beds'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'room_type'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "room_type" */
export type Api_Room_Type_Set_Input = {
  beds?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['api_timestamptz']>;
  id?: Maybe<Scalars['api_uuid']>;
  room_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type Api_Room_Type_Stddev_Fields = {
  beds?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "room_type" */
export type Api_Room_Type_Stddev_Order_By = {
  beds?: Maybe<Api_Order_By>;
};

/** aggregate stddev_pop on columns */
export type Api_Room_Type_Stddev_Pop_Fields = {
  beds?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "room_type" */
export type Api_Room_Type_Stddev_Pop_Order_By = {
  beds?: Maybe<Api_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Api_Room_Type_Stddev_Samp_Fields = {
  beds?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "room_type" */
export type Api_Room_Type_Stddev_Samp_Order_By = {
  beds?: Maybe<Api_Order_By>;
};

/** aggregate sum on columns */
export type Api_Room_Type_Sum_Fields = {
  beds?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "room_type" */
export type Api_Room_Type_Sum_Order_By = {
  beds?: Maybe<Api_Order_By>;
};

/** update columns of table "room_type" */
export type Api_Room_Type_Update_Column = 
  /** column name */
  | 'beds'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'room_type'
  /** column name */
  | 'updated_at';

/** aggregate var_pop on columns */
export type Api_Room_Type_Var_Pop_Fields = {
  beds?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "room_type" */
export type Api_Room_Type_Var_Pop_Order_By = {
  beds?: Maybe<Api_Order_By>;
};

/** aggregate var_samp on columns */
export type Api_Room_Type_Var_Samp_Fields = {
  beds?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "room_type" */
export type Api_Room_Type_Var_Samp_Order_By = {
  beds?: Maybe<Api_Order_By>;
};

/** aggregate variance on columns */
export type Api_Room_Type_Variance_Fields = {
  beds?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "room_type" */
export type Api_Room_Type_Variance_Order_By = {
  beds?: Maybe<Api_Order_By>;
};

/** update columns of table "room" */
export type Api_Room_Update_Column = 
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'room_number'
  /** column name */
  | 'room_type_id'
  /** column name */
  | 'updated_at';

/** aggregate var_pop on columns */
export type Api_Room_Var_Pop_Fields = {
  room_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "room" */
export type Api_Room_Var_Pop_Order_By = {
  room_number?: Maybe<Api_Order_By>;
};

/** aggregate var_samp on columns */
export type Api_Room_Var_Samp_Fields = {
  room_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "room" */
export type Api_Room_Var_Samp_Order_By = {
  room_number?: Maybe<Api_Order_By>;
};

/** aggregate variance on columns */
export type Api_Room_Variance_Fields = {
  room_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "room" */
export type Api_Room_Variance_Order_By = {
  room_number?: Maybe<Api_Order_By>;
};

export type Api_SampleOutput = {
  text: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type Api_String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Api_Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['api_timestamptz']>;
  _gt?: Maybe<Scalars['api_timestamptz']>;
  _gte?: Maybe<Scalars['api_timestamptz']>;
  _in?: Maybe<Array<Scalars['api_timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['api_timestamptz']>;
  _lte?: Maybe<Scalars['api_timestamptz']>;
  _neq?: Maybe<Scalars['api_timestamptz']>;
  _nin?: Maybe<Array<Scalars['api_timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Api_Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['api_uuid']>;
  _gt?: Maybe<Scalars['api_uuid']>;
  _gte?: Maybe<Scalars['api_uuid']>;
  _in?: Maybe<Array<Scalars['api_uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['api_uuid']>;
  _lte?: Maybe<Scalars['api_uuid']>;
  _neq?: Maybe<Scalars['api_uuid']>;
  _nin?: Maybe<Array<Scalars['api_uuid']>>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export type GraphQlSourceFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'typeName'
  | 'fieldName';

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  api: Api;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___typeName'
  | 'pluginCreator___pluginOptions___fieldName'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___typeName'
  | 'pluginOptions___fieldName'
  | 'pluginOptions___url'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Index_PageQueryVariables = Exact<{ [key: string]: never; }>;


export type Index_PageQuery = { api: { reservation: Array<(
      Pick<Api_Reservation, 'id' | 'created_at' | 'updated_at'>
      & { client: Pick<Api_Guest, 'first_name' | 'last_name'> }
    )> } };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { site?: Maybe<Pick<Site, 'buildTime'>> };

export type Reservation_IdQueryVariables = Exact<{
  id: Scalars['api_uuid'];
}>;


export type Reservation_IdQuery = { api: { reservation?: Maybe<Pick<Api_Reservation, 'arrival_date' | 'departure_date'>> } };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
