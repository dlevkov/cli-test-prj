const pic = 'http://lorempixel.com/400/200/animals/';

export class SocialModel {
  public id: number;
  public fullName: string;
  public pic = pic;
  constructor(data: any) {
    this.id = data.id;
    this.fullName = data.fullName;
  }
}
