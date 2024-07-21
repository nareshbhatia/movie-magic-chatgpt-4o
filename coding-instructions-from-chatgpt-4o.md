Here's a basic implementation plan for the "Movie Magic" movie streaming
application using the specified tech stack. This example will cover the main
structure and styling. You can expand upon this with additional features and
functionality as needed.

### Step 1: Setting up the Project

1. **Initialize the Next.js project with TypeScript:**

   ```sh
   npx create-next-app@latest movie-magic --ts
   cd movie-magic
   ```

2. **Install Tailwind CSS:**

   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind CSS:** Update `tailwind.config.js` with:

   ```js
   module.exports = {
     content: [
       './pages/**/*.{js,ts,jsx,tsx}',
       './components/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {
         colors: {
           primary: '#ff0000', // red for accent color
         },
       },
     },
     darkMode: 'class', // enable dark mode
     plugins: [],
   };
   ```

   Update `globals.css` in `styles` directory:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Install Radix UI:**
   ```sh
   npm install @radix-ui/react-avatar @radix-ui/react-dropdown-menu
   ```

### Step 2: Create the Components

1. **Application Header:**

   ```tsx
   // components/Header.tsx
   import React from 'react';
   import { useTheme } from 'next-themes';
   import { Avatar } from '@radix-ui/react-avatar';

   const Header: React.FC = () => {
     const { theme, setTheme } = useTheme();

     return (
       <header className="flex items-center justify-between h-14 px-4 bg-gray-900 text-white dark:bg-gray-800">
         <div className="flex items-center space-x-4">
           <div className="flex items-center space-x-2">
             <img src="/film-icon.svg" alt="Logo" className="h-6 w-6" />
             <span className="font-bold text-lg">Movie Magic</span>
           </div>
           <nav className="flex space-x-4">
             <a href="#" className="hover:text-primary">
               Movies
             </a>
             <a href="#" className="hover:text-primary">
               Watchlist
             </a>
           </nav>
         </div>
         <div className="flex items-center space-x-4">
           <button
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
           >
             {theme === 'light' ? '🌙' : '☀️'}
           </button>
           <Avatar.Root className="w-8 h-8 rounded-full bg-gray-600">
             <Avatar.Image
               src="/avatar.jpg"
               alt="User Avatar"
               className="w-full h-full rounded-full"
             />
             <Avatar.Fallback className="flex items-center justify-center w-full h-full rounded-full">
               U
             </Avatar.Fallback>
           </Avatar.Root>
         </div>
       </header>
     );
   };

   export default Header;
   ```

2. **Movie Filters:**

   ```tsx
   // components/MovieFilters.tsx
   import React from 'react';

   const MovieFilters: React.FC = () => {
     return (
       <div className="flex space-x-4 p-4 bg-gray-100 dark:bg-gray-900">
         <input
           type="text"
           placeholder="Search..."
           className="flex-1 p-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
         />
         <select className="p-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
           <option value="">Categories</option>
           <option value="action">Action</option>
           <option value="comedy">Comedy</option>
           {/* Add more categories as needed */}
         </select>
         <select className="p-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
           <option value="">Certification</option>
           <option value="G">G</option>
           <option value="PG">PG</option>
           <option value="PG-13">PG-13</option>
           <option value="R">R</option>
           <option value="NR">NR</option>
         </select>
       </div>
     );
   };

   export default MovieFilters;
   ```

3. **Movie List:**

   ```tsx
   // components/MovieList.tsx
   import React from 'react';

   const movies = [
     { id: 1, name: 'Movie 1', image: '/movie1.jpg' },
     { id: 2, name: 'Movie 2', image: '/movie2.jpg' },
     // Add more movies as needed
   ];

   const MovieList: React.FC = () => {
     return (
       <div className="p-4">
         {movies.map((movie) => (
           <div
             key={movie.id}
             className="flex items-center space-x-4 h-16 p-2 border-b border-gray-300 dark:border-gray-700"
           >
             <img
               src={movie.image}
               alt={movie.name}
               className="h-12 w-12 rounded"
             />
             <span className="flex-1">{movie.name}</span>
             <button className="text-primary">+</button>
           </div>
         ))}
       </div>
     );
   };

   export default MovieList;
   ```

### Step 3: Combine Components in a Page

1. **Home Page:**

   ```tsx
   // pages/index.tsx
   import Head from 'next/head';
   import Header from '../components/Header';
   import MovieFilters from '../components/MovieFilters';
   import MovieList from '../components/MovieList';

   export default function Home() {
     return (
       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
         <Head>
           <title>Movie Magic</title>
           <link rel="icon" href="/favicon.ico" />
         </Head>

         <Header />
         <MovieFilters />
         <MovieList />
       </div>
     );
   }
   ```

### Step 4: Configure Theme Provider

1. **Install `next-themes`:**

   ```sh
   npm install next-themes
   ```

2. **Wrap the application with the ThemeProvider:**

   ```tsx
   // pages/_app.tsx
   import { AppProps } from 'next/app';
   import { ThemeProvider } from 'next-themes';
   import '../styles/globals.css';

   function MyApp({ Component, pageProps }: AppProps) {
     return (
       <ThemeProvider attribute="class" defaultTheme="dark">
         <Component {...pageProps} />
       </ThemeProvider>
     );
   }

   export default MyApp;
   ```

This is a basic setup to get you started with the "Movie Magic" application
using the specified tech stack. You can enhance the functionality further by
integrating a backend service, user authentication, and more advanced filtering
and sorting capabilities.
