<template>
  <div class="min-h-screen bg-white">
    <NavigationBar />

    <!-- Hero Section -->
    <div class="relative h-[400px] bg-gray-900 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"
      ></div>
      <img
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000"
        alt="Nellcare Beauty Store"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-20 h-full flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-5xl md:text-6xl font-light mb-4">About Us</h1>
          <p class="text-xl md:text-2xl font-light opacity-90">
            Your Beauty & Fashion Destination in Nigeria
          </p>
        </div>
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="bg-gray-50 border-b border-gray-200 py-4 px-6 lg:px-16">
      <p class="text-sm text-gray-500">
        <router-link to="/" class="hover:text-gray-800 transition-colors"
          >Home</router-link
        >
        <span class="mx-2">/</span>
        <span class="text-gray-800">About Us</span>
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-16 py-16">
      <!-- Our Story Section -->
      <div class="mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-light text-gray-900 mb-6">Our Story</h2>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in the heart of Nigeria,
                <strong>Nellcare Beauty</strong> began with a simple vision: to
                make premium cosmetics, exquisite perfumes, and stylish clothing
                accessible to every Nigerian who values quality and elegance.
              </p>
              <p>
                What started as a small boutique has blossomed into one of
                Nigeria's most trusted beauty and fashion destinations. Our
                journey has been driven by an unwavering commitment to
                authenticity, quality, and customer satisfaction.
              </p>
              <p>
                Today, we proudly serve thousands of customers across Nigeria,
                offering a carefully curated selection of international and
                local brands that celebrate African beauty in all its diversity.
              </p>
            </div>
          </div>
          <div class="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000"
              alt="Fashion Store"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Mission & Vision -->
      <div class="mb-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div
              class="w-16 h-16 bg-[#343434] rounded-full flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p class="text-gray-600 leading-relaxed">
              To empower individuals to express their unique beauty and style by
              providing authentic, high-quality cosmetics, perfumes, and
              clothing that inspire confidence and celebrate diversity. We
              strive to deliver an exceptional shopping experience that makes
              luxury accessible to all Nigerians.
            </p>
          </div>

          <div>
            <div
              class="w-16 h-16 bg-[#343434] rounded-full flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p class="text-gray-600 leading-relaxed">
              To become Nigeria's leading beauty and fashion retailer,
              recognized for our commitment to authenticity, innovation, and
              customer satisfaction. We envision a future where every Nigerian
              has access to world-class beauty and fashion products that reflect
              their personal style and values.
            </p>
          </div>
        </div>
      </div>

      <!-- What We Offer -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-light text-gray-900 mb-4">What We Offer</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of premium products curated to meet your
            beauty and fashion needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Cosmetics -->
          <div class="group text-center">
            <div class="relative h-64 mb-6 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800"
                alt="Cosmetics"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <h3
                class="absolute bottom-4 left-0 right-0 text-2xl font-light text-white"
              >
                Cosmetics
              </h3>
            </div>
            <p class="text-gray-600">
              From foundations to lipsticks, we offer a wide range of makeup
              products from trusted international and local brands that cater to
              all skin tones.
            </p>
          </div>

          <!-- Perfumes -->
          <div class="group text-center">
            <div class="relative h-64 mb-6 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800"
                alt="Perfumes"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <h3
                class="absolute bottom-4 left-0 right-0 text-2xl font-light text-white"
              >
                Perfumes
              </h3>
            </div>
            <p class="text-gray-600">
              Discover our exquisite collection of authentic fragrances, from
              classic scents to contemporary favorites that leave a lasting
              impression.
            </p>
          </div>

          <!-- Clothing -->
          <div class="group text-center">
            <div class="relative h-64 mb-6 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800"
                alt="Clothing"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <h3
                class="absolute bottom-4 left-0 right-0 text-2xl font-light text-white"
              >
                Clothing
              </h3>
            </div>
            <p class="text-gray-600">
              Explore our fashion-forward clothing collection featuring trendy
              styles and timeless pieces that complement your wardrobe.
            </p>
          </div>
        </div>
      </div>

      <!-- Our Values -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-light text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-20 h-20 bg-[#97d8ca] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">
              Authenticity
            </h4>
            <p class="text-sm text-gray-600">
              We guarantee 100% authentic products from verified suppliers and
              official brand partners.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 bg-[#97d8ca] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Quality</h4>
            <p class="text-sm text-gray-600">
              Every product is carefully selected and inspected to meet our high
              standards of excellence.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 bg-[#97d8ca] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">
              Customer First
            </h4>
            <p class="text-sm text-gray-600">
              Your satisfaction is our priority. We're committed to providing
              exceptional service at every step.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 bg-[#97d8ca] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
            <p class="text-sm text-gray-600">
              We constantly evolve, bringing you the latest trends and
              technologies in beauty and fashion.
            </p>
          </div>
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="mb-20 bg-[#343434] text-white rounded-2xl p-8 lg:p-12">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-light mb-4">Why Choose Nellcare Beauty?</h2>
          <p class="text-gray-300 max-w-2xl mx-auto">
            Here's what sets us apart from other retailers in Nigeria
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg
                class="w-8 h-8 text-[#97d8ca]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Verified Authenticity</h4>
              <p class="text-sm text-gray-300">
                All products are sourced directly from official distributors and
                verified for authenticity.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg
                class="w-8 h-8 text-[#97d8ca]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Fast Delivery</h4>
              <p class="text-sm text-gray-300">
                Quick and reliable shipping across Nigeria with tracking
                available on all orders.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg
                class="w-8 h-8 text-[#97d8ca]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Secure Payment</h4>
              <p class="text-sm text-gray-300">
                Multiple payment options with bank-level security for your peace
                of mind.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg
                class="w-8 h-8 text-[#97d8ca]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Easy Returns</h4>
              <p class="text-sm text-gray-300">
                Hassle-free return policy within 7 days if you're not completely
                satisfied.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg
                class="w-8 h-8 text-[#97d8ca]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Expert Support</h4>
              <p class="text-sm text-gray-300">
                Our beauty consultants are always ready to help you find the
                perfect products.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg
                class="w-8 h-8 text-[#97d8ca]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Best Prices</h4>
              <p class="text-sm text-gray-300">
                Competitive pricing with regular promotions and exclusive deals
                for our customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Info Section -->
      <div class="text-center bg-gray-50 rounded-2xl p-8 lg:p-12">
        <h2 class="text-3xl font-light text-gray-900 mb-6">Get in Touch</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Have questions or need assistance? We're here to help you find exactly
          what you're looking for.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div
              class="w-12 h-12 bg-[#343434] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Email Us</h4>
            <a
              href="mailto:nellcarebeauty@gmail.com"
              class="text-[#343434] hover:underline"
            >
              nellcarebeauty@gmail.com
            </a>
          </div>

          <div>
            <div
              class="w-12 h-12 bg-[#343434] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Call Us</h4>
            <a href="tel:+2348065194090" class="text-[#343434] hover:underline">
              (+234) 80 65194090
            </a>
          </div>

          <div>
            <div
              class="w-12 h-12 bg-[#343434] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Visit Us</h4>
            <p class="text-gray-600">Nigeria</p>
          </div>
        </div>

        <router-link
          to="/contact"
          class="inline-block px-8 py-3 bg-[#343434] hover:bg-black text-white rounded font-medium tracking-wider uppercase text-sm transition-colors"
        >
          Contact Us
        </router-link>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import NavigationBar from "@/components/navbar/NavigationBar.vue";
import Footer from "@/components/footer/Footer.vue";
</script>
