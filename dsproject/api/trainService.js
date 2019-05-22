import http from './httpService';

export function getTrains() {
  return http.get('http://localhost:4000/api/trains')
}