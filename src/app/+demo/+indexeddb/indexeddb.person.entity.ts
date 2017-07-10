// import { JsonMember, JsonObject } from 'typedjson-npm';
//
// @JsonObject()
export class Person {
  /**
   * ID
   */
  private _id: number;
  /**
   * 编号
   */
  private _code: string;
  /**
   * 姓名
   */
  private _name: string;

  /**
   * 体重
   */
  private _weight: number;
  /**
   * 生日
   */
  private _brithday: Date;
  /**
   *  简历
   */
  private _resume: Blob;
  /**
   * 照片
   */
  private _photo: Blob;
  /**
   * 视频
   */
  private _video: Blob;
  /**
   * 录音
   */
  private _audio: Blob;

  get id(): number {
    return this._id;
  }

  // @JsonMember()
  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  // @JsonMember()
  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  // @JsonMember()
  set name(value: string) {
    this._name = value;
  }

  get photo(): Blob {
    return this._photo;
  }

  // @JsonMember()
  set photo(value: Blob) {
    this._photo = value;
  }

  get weight(): number {
    return this._weight;
  }

  // @JsonMember
  set weight(value: number) {
    this._weight = value;
  }

  get brithday(): Date {
    return this._brithday;
  }

  // @JsonMember()
  set brithday(value: Date) {
    this._brithday = value;
  }

  get resume(): Blob {
    return this._resume;
  }

  // @JsonMember()
  set resume(value: Blob) {
    this._resume = value;
  }

  get video(): Blob {
    return this._video;
  }

  // @JsonMember()
  set video(value: Blob) {
    this._video = value;
  }

  get audio(): Blob {
    return this._audio;
  }

  // @JsonMember()
  set audio(value: Blob) {
    this._audio = value;
  }
}
