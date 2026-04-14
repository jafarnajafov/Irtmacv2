"use client"; // Next.js 14 üçün müştəri kodu olduğunu bildiririk

export function handleScrollToBottom() {
    if (typeof window !== "undefined") {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}