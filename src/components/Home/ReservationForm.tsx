import React from "react";

const ReservationForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="fechaIngreso">Entrada:</label>
        <input type="date" id="fechaIngreso" name="fechaIngreso" required />

        <label htmlFor="fechaSalida">Salida:</label>
        <input type="date" id="fechaSalida" name="fechaSalida" required />

        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default ReservationForm;
