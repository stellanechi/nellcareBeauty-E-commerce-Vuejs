<template>
  <div class="min-h-screen bg-white">
    <NavigationBar />

    <!-- Hero Section -->
    <div class="relative h-[300px] bg-gray-900 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"
      ></div>
      <img
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000"
        alt="Contact Us"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-20 h-full flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-5xl md:text-6xl font-light mb-4">Get in Touch</h1>
          <p class="text-xl font-light opacity-90">
            We'd love to hear from you
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
        <span class="text-gray-800">Contact</span>
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-16 py-16">
      <!-- Contact Info Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Phone -->
        <div
          class="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
        >
          <div
            class="w-16 h-16 bg-[#343434] rounded-full flex items-center justify-center mx-auto mb-4"
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
          <p class="text-gray-600 mb-2">Call us during business hours</p>
          <a
            href="tel:+2348065194090"
            class="text-[#343434] hover:underline font-medium"
          >
            (+234) 80 65194090
          </a>
        </div>

        <!-- Email -->
        <div
          class="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
        >
          <div
            class="w-16 h-16 bg-[#343434] rounded-full flex items-center justify-center mx-auto mb-4"
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
          <p class="text-gray-600 mb-2">Send us an email anytime</p>
          <a
            href="mailto:nellcarebeauty@gmail.com"
            class="text-[#343434] hover:underline font-medium"
          >
            nellcarebeauty@gmail.com
          </a>
        </div>

        <!-- Location -->
        <div
          class="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
        >
          <div
            class="w-16 h-16 bg-[#343434] rounded-full flex items-center justify-center mx-auto mb-4"
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
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Location</h3>
          <p class="text-gray-600 mb-2">Visit our store</p>
          <p class="text-[#343434] font-medium">
            Port Harcourt<br />
            Rivers State, Nigeria
          </p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl font-light text-gray-900 mb-2">
            Send us a Message
          </h2>
          <p class="text-gray-600 mb-8">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent transition-colors"
                placeholder="John Doe"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <!-- Phone -->
            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                v-model="form.phone"
                type="tel"
                id="phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent transition-colors"
                placeholder="+234 800 000 0000"
              />
            </div>

            <!-- Subject -->
            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject <span class="text-red-500">*</span>
              </label>
              <select
                v-model="form.subject"
                id="subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Support</option>
                <option value="product">Product Information</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="form.message"
                id="message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent transition-colors resize-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="submitting"
              class="w-full px-8 py-3 bg-[#343434] hover:bg-black text-white rounded-lg font-medium tracking-wider uppercase text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ submitting ? "Sending..." : "Send Message" }}
            </button>

            <!-- Success Message -->
            <div
              v-if="showSuccess"
              class="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
            >
              <svg
                class="w-5 h-5 text-green-500 flex-shrink-0"
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
              <p class="text-sm text-green-800">
                Thank you! Your message has been sent successfully. We'll get
                back to you soon.
              </p>
            </div>
          </form>
        </div>

        <!-- Additional Info -->
        <div>
          <h2 class="text-3xl font-light text-gray-900 mb-2">Business Hours</h2>
          <p class="text-gray-600 mb-8">
            We're here to serve you during these hours
          </p>

          <div class="space-y-4 mb-12">
            <div
              class="flex justify-between items-center pb-3 border-b border-gray-200"
            >
              <span class="font-medium text-gray-900">Monday - Friday</span>
              <span class="text-gray-600">9:00 AM - 6:00 PM</span>
            </div>
            <div
              class="flex justify-between items-center pb-3 border-b border-gray-200"
            >
              <span class="font-medium text-gray-900">Saturday</span>
              <span class="text-gray-600">10:00 AM - 4:00 PM</span>
            </div>
            <div
              class="flex justify-between items-center pb-3 border-b border-gray-200"
            >
              <span class="font-medium text-gray-900">Sunday</span>
              <span class="text-gray-600">Closed</span>
            </div>
            <div class="flex justify-between items-center pb-3">
              <span class="font-medium text-gray-900">Public Holidays</span>
              <span class="text-gray-600">Closed</span>
            </div>
          </div>

          <!-- Social Media -->
          <div>
            <h3 class="text-2xl font-light text-gray-900 mb-4">Follow Us</h3>
            <p class="text-gray-600 mb-6">
              Stay connected with us on social media for updates, promotions,
              and beauty tips.
            </p>

            <div class="flex gap-4">
              <a
                href="https://twitter.com/nellcarebeauty"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 hover:bg-[#343434] rounded-full flex items-center justify-center transition-colors group"
              >
                <svg
                  class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>

              <a
                href="https://instagram.com/nellcarebeauty"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 hover:bg-[#343434] rounded-full flex items-center justify-center transition-colors group"
              >
                <svg
                  class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>

              <a
                href="https://facebook.com/nellcarebeauty"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 hover:bg-[#343434] rounded-full flex items-center justify-center transition-colors group"
              >
                <svg
                  class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/nellcare-beauty/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 hover:bg-[#343434] rounded-full flex items-center justify-center transition-colors group"
              >
                <svg
                  class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- FAQ Quick Links -->
          <div class="mt-12 p-6 bg-[#97d8ca]/10 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Quick Links
            </h3>
            <div class="space-y-2">
              <router-link
                to="/faqs"
                class="block text-[#343434] hover:underline"
              >
                → Frequently Asked Questions
              </router-link>
              <router-link
                to="/shipping"
                class="block text-[#343434] hover:underline"
              >
                → Shipping & Delivery
              </router-link>
              <router-link
                to="/returns"
                class="block text-[#343434] hover:underline"
              >
                → Returns & Refunds
              </router-link>
              <router-link
                to="/about"
                class="block text-[#343434] hover:underline"
              >
                → About Us
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavigationBar from "@/components/navbar/NavigationBar.vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const submitting = ref(false);
const showSuccess = ref(false);

const handleSubmit = async () => {
  submitting.value = true;
  showSuccess.value = false;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would send the form data to your backend
    // await api.post('/contact', form.value);

    // Show success message
    showSuccess.value = true;

    // Reset form
    form.value = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } catch (error) {
    console.error("Failed to send message:", error);
    alert("Failed to send message. Please try again.");
  } finally {
    submitting.value = false;
  }
};
</script>
