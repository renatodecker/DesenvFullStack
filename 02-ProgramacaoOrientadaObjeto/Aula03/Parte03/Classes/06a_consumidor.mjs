import { CarroComPlaca } from "./06a_CarroComPlaca.mjs";
import { Locadora } from "./05a_locadora.mjs";

var locadora = new Locadora();

locadora.adicionaCarro(new CarroComPlaca("FLX3188"));
locadora.adicionaCarro(new CarroComPlaca("MMD0512"));
locadora.consultaCarros();

locadora.abasteceCarro(0,40);
locadora.consultaCarros();

locadora.abasteceCarro(1, 30)
locadora.abasteceCarro(0, 30)
locadora.consultaCarros()