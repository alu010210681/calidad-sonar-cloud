export class FlightBookingSystem {
  public bookFlight(details: any): string {
    //console.table(details);
    return "Flight booked successfully!";
  }
}

export class HotelBookingSystem {
  public bookHotel(details: any): string {
    //console.table(details);
    return "Hotel booked successfully!";
  }
}

export class CarRentalSystem {
  public rentCar(details: any): string {
    //console.table(details);
    return "Car rented successfully!";
  }
}

// Facade
export class TravelBookingFacade {
  private flightSystem = new FlightBookingSystem();
  private hotelSystem = new HotelBookingSystem();
  private carRentalSystem = new CarRentalSystem();

  public bookTravelPackage(details: any): string[] {
    let results = [];
    
    results.push(this.flightSystem.bookFlight(details.flight));
    results.push(this.hotelSystem.bookHotel(details.hotel));
    results.push(this.carRentalSystem.rentCar(details.car));

    return results;
  }
}

// Cliente

export class Client {
  private bookingFacade = new TravelBookingFacade();

  public bookTrip(name: string, seat: string, room: string, nameCar: string, type: string): string[]{
    const travelDetails = {
      flight: { name: name, seat: seat},
      hotel: { room: room},
      car: { name: nameCar, type: type}
    };

    const results = this.bookingFacade.bookTravelPackage(travelDetails);
    return results;
  }
}

// Ejemplo de uso
const client = new Client();
client.bookTrip("John Doe", "1A", "101", "Toyota", "SUV");
