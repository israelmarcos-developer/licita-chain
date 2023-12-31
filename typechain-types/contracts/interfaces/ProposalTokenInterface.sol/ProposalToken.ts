/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface ProposalTokenInterface extends Interface {
  getFunction(
    nameOrSignature: "getInfo" | "getValue" | "setValue"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "ValueChanged"): EventFragment;

  encodeFunctionData(functionFragment: "getInfo", values?: undefined): string;
  encodeFunctionData(functionFragment: "getValue", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
}

export namespace ValueChangedEvent {
  export type InputTuple = [whoChanged: AddressLike, newValue: BigNumberish];
  export type OutputTuple = [whoChanged: string, newValue: bigint];
  export interface OutputObject {
    whoChanged: string;
    newValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ProposalToken extends BaseContract {
  connect(runner?: ContractRunner | null): ProposalToken;
  waitForDeployment(): Promise<this>;

  interface: ProposalTokenInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getInfo: TypedContractMethod<[], [string], "view">;

  getValue: TypedContractMethod<[], [bigint], "view">;

  setValue: TypedContractMethod<
    [_newValue: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getInfo"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getValue"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setValue"
  ): TypedContractMethod<[_newValue: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "ValueChanged"
  ): TypedContractEvent<
    ValueChangedEvent.InputTuple,
    ValueChangedEvent.OutputTuple,
    ValueChangedEvent.OutputObject
  >;

  filters: {
    "ValueChanged(address,uint256)": TypedContractEvent<
      ValueChangedEvent.InputTuple,
      ValueChangedEvent.OutputTuple,
      ValueChangedEvent.OutputObject
    >;
    ValueChanged: TypedContractEvent<
      ValueChangedEvent.InputTuple,
      ValueChangedEvent.OutputTuple,
      ValueChangedEvent.OutputObject
    >;
  };
}
