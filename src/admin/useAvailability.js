import { useCallback, useEffect, useState } from "react";
import { storage } from "./storage";
import { properties } from "../data/properties";

/**
 * Mapa { [propertyId]: number_de_habitaciones_disponibles }
 * Si no hay nada guardado, usa el `defaultAvailableRooms` de cada propiedad.
 */
export function useAvailability() {
  const [availability, setAvailability] = useState({});

  useEffect(() => {
    const stored = storage.getAvailability();
    const base = {};
    for (const p of properties) {
      base[p.id] =
        stored[p.id] !== undefined ? stored[p.id] : p.defaultAvailableRooms ?? 0;
    }
    setAvailability(base);
  }, []);

  const persist = useCallback((next) => {
    setAvailability(next);
    storage.saveAvailability(next);
  }, []);

  const setRooms = useCallback(
    (propertyId, count) => {
      const safe = Math.max(0, Math.min(99, Number(count) || 0));
      persist({ ...availability, [propertyId]: safe });
    },
    [availability, persist]
  );

  const increment = useCallback(
    (propertyId, delta) => {
      const current = availability[propertyId] ?? 0;
      setRooms(propertyId, current + delta);
    },
    [availability, setRooms]
  );

  const totalAvailable = Object.values(availability).reduce(
    (acc, n) => acc + (Number(n) || 0),
    0
  );

  return {
    availability,
    setRooms,
    increment,
    totalAvailable,
  };
}
