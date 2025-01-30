@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "HonerThose";
  src: url("./fonts/honer-those.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Freesentation";
  src: url("./fonts/FreesentationVF.ttf") format("truetype");
  font-weight: 100 900;
  font-style: normal;
}

body {
  font-family: "Freesentation", Arial, Helvetica, sans-serif;
  transition: background-color 0.5s ease, color 0.5s ease;
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
  [data-registry="plate"] {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

body[data-theme="skyblue"] {
  background-color: #74bde8;
  color: #333d4b;
}
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --brand: 217.2 91.2% 59.8%;
    --highlight: 47.9 95.8% 53.1%;
  }
  [data-registry="plate"].dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --brand: 213.3 93.9% 67.8%;
    --highlight: 48 96% 53%;
  }

  [data-theme="skyblue"] {
    --background: 203 71% 68%;
    --foreground: 0 0% 0%;
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  [data-theme="forest"] {
    --background: 152 69% 38%;
    --foreground: 0 0% 0%;
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  [data-theme="light"] {
    --background: 0 0% 100%;
    --foreground: 0 0% 18%;
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  [data-theme="dune"] {
    --background: 25 100% 61%;
    --foreground: 0 0% 18%;
    transition: background-color 0.5s ease, color 0.5s ease;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

body[data-theme="skyblue"] {
  background-color: #74bde8;
  color: #000000;
}

body[data-theme="forest"] {
  background-color: #13ae70;
  color: #000000;
}

body[data-theme="light"] {
  background-color: #ffffff;
  color: #2f2f2f;
}

body[data-theme="dune"] {
  background-color: #ff8c39;
  color: #2f2f2f;
}

.prose {
  @apply text-gray-900;

  & h1 {
    @apply text-4xl font-bold mb-1;
  }
  & h2 {
    @apply text-3xl font-bold mb-1;
  }

  & ul {
    @apply list-disc pl-5 my-0;
    & ::marker {
      @apply text-black;
    }
  }
  & ol {
    @apply list-decimal pl-5 my-4;
    & ::marker {
      @apply text-black;
    }
  }
  & li {
    @apply my-0;
  }

  & a {
    @apply hover:underline;
  }

  & :not(pre) > code {
    @apply bg-gray-100 text-black px-1.5 py-0.5 rounded-md font-mono text-sm;
    &::before,
    &::after {
      display: none;
    }
  }
}
