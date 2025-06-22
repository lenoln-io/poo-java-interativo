document.addEventListener("DOMContentLoaded", function () {
  // Toggle do Menu Mobile
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  });

  // Ativa o navegador de seções
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 80) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Controle de estrutura de abas
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const tabId = button.dataset.tab;
      tabContents.forEach((content) => {
        content.classList.add("hidden");
        if (content.id === `${tabId}-content`) {
          content.classList.remove("hidden");
        }
      });
    });
  });
  document.querySelector('.tab-button[data-tab="for"]').click();

  // Util para delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Interatividade de trechos de código - FOR loop
  document.getElementById("run-for").addEventListener("click", async () => {
    const output = document.getElementById("for-output");
    output.textContent = "";
    const runForButton = document.getElementById("run-for");
    runForButton.disabled = true;
    const forCodeLines = document.querySelectorAll(
      "#for-content span[data-line]"
    );

    function highlightForLine(lineId) {
      forCodeLines.forEach((line) =>
        line.classList.remove("code-line-highlight")
      );
      const currentLine = document.querySelector(
        `#for-content span[data-line="${lineId}"]`
      );
      if (currentLine) currentLine.classList.add("code-line-highlight");
    }

    for (let i = 0; i < 5; i++) {
      highlightForLine("for-1"); // for (int i = 0; i < 5; i++) {
      await delay(700);

      highlightForLine("for-2"); // System.out.println("O valor de i é: " + i);
      output.textContent += `O valor de i é: ${i}\n`;
      await delay(700);
    }
    highlightForLine(""); // Clear highlight
    runForButton.disabled = false;
  });

  // Interatividade de trechos de código - WHILE loop
  document.getElementById("run-while").addEventListener("click", async () => {
    const output = document.getElementById("while-output");
    output.textContent = "";
    const runWhileButton = document.getElementById("run-while");
    runWhileButton.disabled = true;
    const whileCodeLines = document.querySelectorAll(
      "#while-content span[data-line]"
    );

    function highlightWhileLine(lineId) {
      whileCodeLines.forEach((line) =>
        line.classList.remove("code-line-highlight")
      );
      const currentLine = document.querySelector(
        `#while-content span[data-line="${lineId}"]`
      );
      if (currentLine) currentLine.classList.add("code-line-highlight");
    }

    let contador = 0;
    highlightWhileLine("while-1"); // int contador = 0;
    await delay(700);

    while (contador < 3) {
      highlightWhileLine("while-2"); // while (contador < 3) {
      await delay(700);

      highlightWhileLine("while-3"); // System.out.println("Contador: " + contador);
      output.textContent += `Contador: ${contador}\n`;
      await delay(700);

      highlightWhileLine("while-4"); // contador++;
      contador++;
      await delay(700);
    }
    highlightWhileLine("while-2"); // Highlight condition one last time as it becomes false
    await delay(700);
    highlightWhileLine(""); // Clear highlight
    runWhileButton.disabled = false;
  });


  // Interatividade de trechos de código - DO-WHILE loop
  document
    .getElementById("run-do-while")
    .addEventListener("click", async () => {
      const output = document.getElementById("do-while-output");
      output.textContent = "";
      const runDoWhileButton = document.getElementById("run-do-while");
      runDoWhileButton.disabled = true;
      const doWhileCodeLines = document.querySelectorAll(
        "#do-while-content span[data-line]"
      );

      function highlightDoWhileLine(lineId) {
        doWhileCodeLines.forEach((line) =>
          line.classList.remove("code-line-highlight")
        );
        const currentLine = document.querySelector(
          `#do-while-content span[data-line="${lineId}"]`
        );
        if (currentLine) currentLine.classList.add("code-line-highlight");
      }

      let j = 0;
      highlightDoWhileLine("do-while-1"); // int j = 0;
      await delay(700);

      do {
        highlightDoWhileLine("do-while-2"); // do {
        await delay(700);

        highlightDoWhileLine("do-while-3"); // System.out.println("O valor de j é: " + j);
        output.textContent += `O valor de j é: ${j}\n`;
        await delay(700);

        highlightDoWhileLine("do-while-4"); // j++;
        j++;
        await delay(700);

        highlightDoWhileLine("do-while-5"); // } while (j < 3);
        await delay(700);
      } while (j < 3);

      highlightDoWhileLine("do-while-5"); // Highlight condition one last time as it becomes false
      await delay(700);
      highlightDoWhileLine(""); // Clear highlight
      runDoWhileButton.disabled = false;
    });

  // Fábrica de objetos
  const createObjectBtn = document.getElementById("create-object");
  const objectContainer = document.getElementById("object-container");
  const objectPlaceholder = document.getElementById("object-placeholder");
  let objectCount = 0;

  createObjectBtn.addEventListener("click", () => {
    if (objectPlaceholder) {
      objectPlaceholder.remove();
    }
    objectCount++;
    const newObject = document.createElement("div");
    newObject.className =
      "bg-white p-3 rounded-lg border border-emerald-300 shadow-sm animate-fade-in";
    const colors = ["Azul", "Vermelho", "Verde", "Preto", "Branco", "Prata"];
    const makes = ["Fiat", "Ford", "Toyota", "Honda", "VW"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomMake = makes[Math.floor(Math.random() * makes.length)];

    newObject.innerHTML = `
                    <h5 class="font-bold text-slate-800">carro${objectCount}</h5>
                    <p class="text-sm font-mono text-slate-600">marca: "${randomMake}"</p>
                    <p class="text-sm font-mono text-slate-600">cor: "${randomColor}"</p>
                `;
    objectContainer.appendChild(newObject);
  });

  // Simulação
  const runSimulationBtn = document.getElementById("run-simulation");
  const mainCodeLines = document.querySelectorAll("#main-code span[data-line]");
  const pessoaClassCodeLines = document.querySelectorAll(
    "#pessoa-class-code span[data-line]"
  );
  const pessoaIdadeLine = document.querySelector(
    '#p1-state p[data-line="idade-pessoa-1"]'
  );
  const p1Nome = document.getElementById("p1-nome");
  const p1Idade = document.getElementById("p1-idade");
  const p1State = document.getElementById("p1-state");
  const p2Nome = document.getElementById("p2-nome");
  const p2Idade = document.getElementById("p2-idade");
  const p2State = document.getElementById("p2-state");
  const simOutput = document.getElementById("simulation-output");

  function resetSimulation() {
    mainCodeLines.forEach((line) =>
      line.classList.remove("code-line-highlight")
    );
    pessoaClassCodeLines.forEach((line) =>
      line.classList.remove("code-line-highlight")
    );
    pessoaIdadeLine.classList.remove("code-line-highlight");
    p1Nome.textContent = "...";
    p1Idade.textContent = "...";
    p2Nome.textContent = "...";
    p2Idade.textContent = "...";
    p1State.classList.add("opacity-30");
    p2State.classList.add("opacity-30");
    simOutput.textContent = "";
    runSimulationBtn.disabled = false;
  }

  async function startSimulation() {
    resetSimulation();
    runSimulationBtn.disabled = true;
    const simulationDelay = 500; // Delay padrão para cada linha destacada

    function highlightMainLine(lineId) {
      mainCodeLines.forEach((line) =>
        line.classList.remove("code-line-highlight")
      );
      const currentLine = document.querySelector(
        `#main-code span[data-line="${lineId}"]`
      );
      if (currentLine) currentLine.classList.add("code-line-highlight");
    }

    function highlightPessoaClassLine(lineId) {
      pessoaClassCodeLines.forEach((line) =>
        line.classList.remove("code-line-highlight")
      );
      const currentLine = document.querySelector(
        `#pessoa-class-code span[data-line="${lineId}"]`
      );
      if (currentLine) currentLine.classList.add("code-line-highlight");
    }

    function highlightPessoaIdadeLine(lineId) {
      const currentLine = document.querySelector(
        `#p1-state p[data-line="${lineId}"]`
      );
      console.log(currentLine);
      if (currentLine) currentLine.classList.add("code-line-highlight");
      delay(simulationDelay * 4).then(() => {
        currentLine.classList.remove("code-line-highlight");
      });
    }

    // Line 2: Pessoa p1 = new Pessoa();
    highlightMainLine("main-2");
    await delay(simulationDelay);
    p1State.classList.remove("opacity-30");
    await delay(simulationDelay);

    // Line 3: p1.nome = "Maria";
    highlightMainLine("main-3");
    await delay(simulationDelay);
    p1Nome.textContent = '"Maria"';
    await delay(simulationDelay);

    // Line 4: p1.idade = 25;
    highlightMainLine("main-4");
    await delay(simulationDelay);
    p1Idade.textContent = "25";
    await delay(simulationDelay);

    // Line 5: Pessoa p2 = new Pessoa();
    highlightMainLine("main-5");
    await delay(simulationDelay);
    p2State.classList.remove("opacity-30");
    await delay(simulationDelay);

    // Line 6: p2.nome = "João";
    highlightMainLine("main-6");
    await delay(simulationDelay);
    p2Nome.textContent = '"João"';
    await delay(simulationDelay);

    // Line 7: p2.idade = 30;
    highlightMainLine("main-7");
    await delay(simulationDelay);
    p2Idade.textContent = "30";
    await delay(simulationDelay);

    // Line 8: p1.apresentar();
    highlightMainLine("main-8"); // Highlight call site in main
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-9"); // Method signature
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-10"); // println start
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-11"); // string concat
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-12"); // string concat
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-13"); // end of println
    simOutput.textContent += "Meu nome é Maria e tenho 25 anos.\n";
    await delay(simulationDelay * 2); // Longer delay for output to sink in
    pessoaClassCodeLines.forEach((line) =>
      line.classList.remove("code-line-highlight")
    ); // Clear pessoa highlights
    await delay(simulationDelay);

    // Line 9: p2.apresentar();
    highlightMainLine("main-9"); // Highlight call site in main
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-9"); // Method signature
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-10"); // println start
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-11"); // string concat
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-12"); // string concat
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-13"); // end of println
    simOutput.textContent += "Meu nome é João e tenho 30 anos.\n";
    await delay(simulationDelay * 2);
    pessoaClassCodeLines.forEach((line) =>
      line.classList.remove("code-line-highlight")
    );
    await delay(simulationDelay);

    // Line 10: p1.aniversario();
    highlightMainLine("main-10"); // Highlight call site in main
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-5"); // Method signature
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-6"); // idade++;
    await delay(simulationDelay);
    p1Idade.textContent = parseInt(p1Idade.textContent) + 1; // Update state
    await delay(simulationDelay);
    highlightPessoaIdadeLine("idade-pessoa-1");
    await delay(simulationDelay * 2);
    pessoaClassCodeLines.forEach((line) =>
      line.classList.remove("code-line-highlight")
    );
    await delay(simulationDelay);

    // Line 11: p1.apresentar(); (after anniversary)
    highlightMainLine("main-11"); // Highlight call site in main
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-9"); // Method signature
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-10"); // println start
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-11"); // string concat
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-12"); // string concat
    await delay(simulationDelay);
    highlightPessoaClassLine("pessoa-13"); // end of println
    simOutput.textContent += `Meu nome é Maria e tenho ${p1Idade.textContent} anos.\n`;
    await delay(simulationDelay * 2);
    pessoaClassCodeLines.forEach((line) =>
      line.classList.remove("code-line-highlight")
    );
    await delay(simulationDelay);

    // End of simulation
    mainCodeLines.forEach((line) =>
      line.classList.remove("code-line-highlight")
    ); // Clear final main highlight
    runSimulationBtn.disabled = false;
  }

  runSimulationBtn.addEventListener("click", startSimulation);
});
