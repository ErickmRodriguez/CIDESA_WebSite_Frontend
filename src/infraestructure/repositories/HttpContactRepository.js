import { ContactRepository } from "../../domain/repositories/ContactRepository.js";
import { httpClient } from "../http/HttpClient.js";
import { appConfig } from "../../config/appConfig.js";

export class HttpContactRepository extends ContactRepository {
  async save(message) {
    const response = await httpClient.post(appConfig.api.contactEndpoint, message.toDTO());
    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status} al enviar el mensaje.`);
    }
    return response.data;
  }
}