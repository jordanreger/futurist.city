import { Head } from "$fresh/runtime.ts";

const cityscape = `
░                      ░░     ░░░░░░░         ▒▒                ░  ▒▒▒▒▒▒▒▒▒▒ ███ ░░░░░            ▒                         ░░░░ ██████████████   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    ▒▒▒▒▒▒▒▒▒▒▒    ░       ▒        ▓▓  ░░░░░      ▒▒▒▒▒▒▒           ░
░                    ░░░░     ░▓▓▓▓▓▓▓▓▓      ▒▒       ▓      ░░░░ ▒▒▒▒▒▒▒▒▒▒ ███░░░░░░░░░         ▒                         ░░░░ ██████████████   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████ ▒▒▒▒▒▒▒▒▒▒▒   ░░░      ▒▒▒▒▒   ▓▓▓▓ ░░░░░      ▒███████  ███████ ░░▓▓▓▓▓
░░░   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ░░░░░    ░░▓▓▓▓▓▓▓▓▓      ▒▒▒▒ ▓▓▓▓▓▓▓▓▓  ░░░░░▒▒▒▒▒▒▒▒▒▒ ███░░░░░░░░░░       ▒▒▒        ▒▒▒▒▒▒▒▒       ░░░░░░██████████████   ▓▓▓█████████████▓▓▓▓█████ ▒▒▒▒▒▒▒▒▒▒▒  ░░░░      ▒▒▒▒▒▒ ▓▓▓▓▓▓▓▓▓░░░     ▒███████  ███████ ░░▓▓▓▓▓
░░░░  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ░░█████████████▓▓▓▓▓▓▓   ▒▒▒▒▒▓▓▓█████████████░▒▒▒▒▒▒▒▒▒▒ ████████████░       ▒▒▒        ▒▒▒▒▒▒▒▒     ░░░░░░░░██████████████ ▓▓▓▓▓█████████████▓▓▓▓▓████▒▒▒▒▒▒▒▒▒▒▒▒  ░░░░░███████████████████████████  ▒███████  ███████ ░░▓▓▓▓▓▓
░░░░  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░█████████████▓▓▓▓▓▓▓  ▒▒▒▒▒▒▓▓▓█████████████░▒▒▒▒▒▒▒▒▒▒▒████████████░      ▒▒▒▒▒      ▒▒▒▒▒▒▒▒▒  ▓▓▓▓▓▓▓▓░░░██████████████ ▓▓▓▓▓█████████████▓▓▓▓▓████▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓░░░███████████████████████████  ▒███████  ███████░░░▓▓▓▓▓▓
░░░░  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░█████████████▓▓▓▓▓▓▓ ▒▒▒▒▒▒▒▓▓▓█████████████░▒▒▒▒▒▒▒▒▒▒▒████████████░      ▒▒▒▒▒      ▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓░░░██████████████ ▓▓▓▓▓█████████████▓▓▓▓▓████▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓░░███████████████████████████▒▒▒███████▒ ███████░░░▓▓▓▓▓▓
▓░░░  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░█████████████▓▓▓▓▓▓▓ ▒▒▒▒▒▒█████████████████░▒▒▒▒▒▒▒▒▒▒▒████████████░░░    ▒▒▒██████████████████▒▓▓▓▓▓▓▓▓░░░██████████████ ▓▓▓▓▓████████████████▓▓████▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓░░███████████████████████████▒▒▒███████▒ ███████░░░▓▓▓▓▓▓
▓░░░ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░█████████████▓▓▓▓▓▓▓ ▒▒▒▒▒▒█████████████████░▒▒▒▒▒▓▓▓▓▒▒████████████▒▒░   ▒▒▒▒██████████████████▒▓▓▓▓▓▓▓▓░░░██████████████▓▓▓▓▓▓████████████████▓▓█████▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓░░███████████████████████████▒▒████████▒ █████████░▓▓▓▓▓▓
▓░░░▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓░█████████████▓▓▓▓▓▓▓ ▒▒▒▒▒▒█████████████▓░░░▒▒▒▒▒▒▓▓▓▓▒▒████████████▒▒░░  ▒▒▒▒██████████████████▒▓▓▓▓▓▓▓▓▓▓▓██████████████▓▓▓▓▓▓████████████████▓▓█████▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████████████████████▒▒████████▒▒█████████▓▓▓▓▓▓▓
▓▓░▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓█████████████▓▓▓▓▓▓▓ ▒▒▒▒▒▒█████████████▓░██████▒▒▓▓▓▓▒▒████████████▒▒░▓▓▓▓▓▓▓██████████████████▒▓▓▓██████████████████████▓▓▓▓▓▓█████████████▓▓▓▓▓█████▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████████████████████▒▒████████▒▒█████████▓▓▓▓▓▓▓
▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓█████████████▓▓▓▓▓▓▓ ▒▒▒▒▒▒▒▓▓▓█████████▓░██████▓▓▓▓▓▓▓▒████████████▒▒░▓▓▓▓▓▓▓██████████████████▓▓▓▓██████████████████████▓▓▓▓▓▓█████████████▓▓▓▓▓█████▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████████████████████▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
▓▓▓▓▒▒███████████▓▓▓▓▓▓▓▓█████████████▓▓▓▓▓▓▓ ▒▒▒▒▒▒▒▓▓▓█████████▓░██████▓▓▓▓▓▓▓▓████████████▒▒░▓▓▓▓▓▓▓██████████████████▓▓▓▓██████████████████████▓▓▓▓▓▓█████████████▓▓▓▓▓█████▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████████████████████▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
▓▓▓▓▒█████████████▓▓▓▓▓▓▓█████████████▓▓██████████████▓▓█████████▓░██████▓▓▓▓▓▓▓▓████████████▒▒░▓▓▓▓▓▓▓██████████████████▓▓▓▓██████████████████████▓▓▓▓▓▓█████████████▓▓▓▓▓█████▒▒███████████▓▓▓▓▓███████████████████████████▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
▓▓▓▓███████████████▓▓▓▓▓▓█████████████▓▓██████████████▓▓█████████▓▓████████▓▓▓▓▓▓████████████▒▒▒▓▓▓▓▓▓▓██████████████████▓▓▓▓██████████████████████████▓▓█████████████▓▓▓▓▓█████▒▒████████████▓▓▓▓███████████████████████████▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
▓▓▓█████████████████▓▓▓▓▓█████████████▓▓██████████████▓▓█████████▓▓████████▓▓▓▓▓▓████████████▒▒▒▓▓▓▓▓▓▓██████████████████▓▓▓▓██████████████████████████▓▓█████████████▓▓▓▓▓█████▒▒████████████▓▓█████████████████████████████▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
▓▓███████████████████▓▓▓▓█████████████▓▓██████████████▓▓█████████▓▓████████▓▓▓▓▓▓████████████▒▒▒▓▓▓▓▓▓▓██████████████████▓▓▓▓██████████████████████████▓▓█████████████▓▓▓▓▓█████▒▒████████████▓▓███████████████████████████▒▒▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
▓▓███████████████████▓▓███████████████▓▓██████████████▓▓█████████▓▓████████▓▓▓▓▓▓████████████▒▒▒▓▓▓▓▓▓▓██████████████████▓▓▓▓██████████████████████████▓▓█████████████▓▓▓▓▓█████▒▒████████████▓▓███████████████████████████▒▒▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
▓▓███████████████████▓▓███████████████▓▓██████████████▓▓█████████▓▓████████▓▓▓▓▓▓████████████▒▒▓▓▓▓▓▓▓▓██████████████████▓▓▓▓██████████████████████████▓▓█████████████▓▓▓▓▓█████▒▒████████████▓▓███████████████████████████▒▒▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
▓▓███████████████████▓▓███████████████▓▓██████████████▓▓█████████▓▓████████▓▓▓▓▓▓████████████▒▒▓▓▓▓▓▓██████████████████████▓▓██████████████████████████▓▓█████████████▓▓▓▓▓█████▒▒████████████▓▓███████████████████████████▒▒▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
▓▓███████████████████▓▓███████████████▓▓██████████████▓▓█████████▓▓████████▓▓▓▓▓▓████████████▒▒▓▓▓▓▓▓██████████████████████▓▓██████████████████████████▓▓█████████████▓▓▓▓▓█████▒▒████████████▓▓███████████████████████████▒▒▒▒████████▒▒█████████▓▓▓▓▓▓▓▓
`;

export default function CityCenter() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>CITY CENTER | FUTURIST CITY</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>

        <link rel="preload" as="image" href="/cityscape-city_center.svg"></link>
      </Head>
      <body>
        <main>
          <h1 id="districts-h1"><a href="/" class="enter-button">⟵ Back</a><br/>CITY CENTER</h1>
          <br/>
          <div class="cityscape-frame">
            <img src="/cityscape-city_center.svg" class="cityscape" />
          </div>
          <p>Welcome to the heart of it all. High end shops, restaurants, you name it. Everything is open 24/7 - no sleep for the wicked. Everyone who visits Futurist City stops by.</p>
          <br/>
          <article>
            <h3>RAMEN BAR</h3>
            <p>Sit down, grab a bowl of ramen, and let the rain pass.</p>
          </article>
          <article>
            <h3>CENTER CYBERDECKS</h3>
            <p>Upgrades, people. Upgrades!</p>
          </article>
          <article>
            <h3>MESSAGE BOARD</h3>
            <p>Read the latest news from around town.</p>
          </article>
        </main>
      </body>
    </>
  );
}
