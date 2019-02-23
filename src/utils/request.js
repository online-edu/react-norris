import axios from 'axios';
/**
 * Request service for network calls.
 */
export default {
  /**
   * Get request
   *
   * @param {string} url - network request url
   * @param {Object} [request] - request configuration
   */
  async get(url, request) {
    const resp = await axios.get(url, request);
    return resp.data;
  },
};
