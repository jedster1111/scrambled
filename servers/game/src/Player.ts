export type PlayerDTO = {
  id: string;
  username: string;
};

export class Player {
  constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
  }

  private id: string;
  private username: string;

  toDTO(): PlayerDTO {
    return {
      id: this.id,
      username: this.username,
    };
  }
}
