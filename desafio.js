// 1. Definição da Classe (Molde do Herói)
class Heroi {
    // O 'constructor' é a função chamada quando criamos um novo herói (new Heroi(...))
    // Ele define as propriedades do objeto
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; // tipo pode ser: mago, guerreiro, monge, ninja
    }

    // 2. Definição do Método 'atacar'
    atacar() {
        // Variável para guardar a descrição do ataque
        let ataque = "";

        // 3. Estrutura de Decisão (switch) para definir o ataque
        // Verificamos a propriedade 'this.tipo' do nosso herói
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                // Uma opção padrão caso o tipo não seja nenhum dos esperados
                ataque = "um ataque indefinido";
        }

        // 4. Saída formatada
        // Usamos template literals (crases ``) para formatar a string
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- Demonstração de Uso ---

// 5. Criando Objetos (Instâncias) da classe Heroi
// Cada 'new Heroi' chama o 'constructor'
let heroiMago = new Heroi("Merlin", 150, "mago");
let heroiGuerreiro = new Heroi("Arthur", 32, "guerreiro");
let heroiMonge = new Heroi("Bruce", 30, "monge");
let heroiNinja = new Heroi("Hanzo", 25, "ninja");

// Colocando os heróis em uma lista (Array)
const herois = [heroiMago, heroiGuerreiro, heroiMonge, heroiNinja];

console.log("--- A Batalha Começou! ---");

// 6. Laço de Repetição
// Vamos percorrer a lista de heróis e chamar o método 'atacar' de cada um
for (let heroi of herois) {
    heroi.atacar();
}