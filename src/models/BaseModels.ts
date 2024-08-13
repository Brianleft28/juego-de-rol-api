import MySqlAdapter from "../adapters/database/MySqlAdapter";

export default class BaseRepository {
  private entity: string;
  private adapter: MySqlAdapter;

  constructor(entity: string) {
    this.entity = entity;
    this.adapter = MySqlAdapter.getInstance();
  }

  async find() {
    try {
      const query = `SELECT * FROM ${this.entity}`;
      const [rows] = await this.adapter.query(query);
      return rows;
    } catch (error) {
      console.error("Error finding", error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const query = `SELECT * FROM ${this.entity} WHERE id = ?`;
      const [rows] = await this.adapter.query(query, [id]);
      return rows;
    } catch (error) {
      console.error("Error finding one", error);
      throw error;
    }
  }

  async update(id: number, params: any) {
    try {
      const query = `UPDATE ${this.entity} SET ? WHERE id = ?`;
      const result = await this.adapter.query(query, [params, id]); // Utilizando un array de parámetros
      return result;
    } catch (error) {
      console.error("Error updating", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const query = `DELETE from ${this.entity} WHERE id = ?`;
      const result = await this.adapter.query(query, [id]); // Utilizando un array de parámetros
      return result;
    } catch (error) {
      console.error("Error deleting", error);
      throw error;
    }
  }
}
