/**
 * BookVerse Admin Wireframe Interaction Engine
 * Provides live prototype interactivity: tab switching, modal dialogs,
 * book approvals, token adjustments, moderation workflows, and toast alerts.
 */

// Simple Toast Notification
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = 'toast-' + type;
  toast.style.display = 'block';
  
  if (type === 'error') {
    toast.style.background = '#991b1b';
  } else if (type === 'warning') {
    toast.style.background = '#9a3412';
  } else {
    toast.style.background = '#203e35';
  }

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.style.display = 'none';
  }, 3500);
}

// Modal Helpers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    const firstInput = modal.querySelector('input, textarea, select');
    if (firstInput) firstInput.focus();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
  }
}

// Global modal backdrop close listener
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

// Tab Switcher Helper
function setupTabs() {
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.admin-tabs');
      if (!parent) return;
      
      parent.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetCategory = tab.dataset.tab;
      const targetRows = document.querySelectorAll('[data-category]');
      if (targetRows.length > 0 && targetCategory) {
        targetRows.forEach(row => {
          if (targetCategory === 'all' || row.dataset.category === targetCategory) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      }
    });
  });
}

// Shared Navigation Header / Sidebar generator if needed, or static links
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
});
