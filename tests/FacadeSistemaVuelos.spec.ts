import { expect } from 'chai';
import 'mocha';

import { FlightBookingSystem, HotelBookingSystem, CarRentalSystem, TravelBookingFacade, Client } from '../src/FacadeSistemaVuelos.js';

describe('FlightBookingSystem', () => {
  it('should book a flight', () => {
    const system = new FlightBookingSystem();
    const result = system.bookFlight({ name: 'Test', seat: 'A1' });
    expect(result).to.equal('Flight booked successfully!');
  });
});

describe('HotelBookingSystem', () => {
  it('should book a hotel', () => {
    const system = new HotelBookingSystem();
    const result = system.bookHotel({ room: '101' });
    expect(result).to.equal('Hotel booked successfully!');
  });
});

describe('CarRentalSystem', () => {
  it('should rent a car', () => {
    const system = new CarRentalSystem();
    const result = system.rentCar({ name: 'Test', type: 'SUV' });
    expect(result).to.equal('Car rented successfully!');
  });
});

describe('TravelBookingFacade', () => {
  it('should book a travel package', () => {
    const facade = new TravelBookingFacade();
    const results = facade.bookTravelPackage({
      flight: { name: 'Test', seat: 'A1' },
      hotel: { room: '101' },
      car: { name: 'Test', type: 'SUV' }
    });
    expect(results).to.have.members(['Flight booked successfully!', 'Hotel booked successfully!', 'Car rented successfully!']);
  });
});

describe('Client', () => {
  it('should book a trip', () => {
    const client = new Client();
    const results = client.bookTrip('Test', 'A1', '101', 'Test', 'SUV');
    expect(results).to.have.members(['Flight booked successfully!', 'Hotel booked successfully!', 'Car rented successfully!']);
  });
});