import tkinter as tk
from tkinter import messagebox
import subprocess
import webbrowser

class ActivatorApp:
    def __init__(self, master):
        self.master = master
        master.title("Activator App")
        master.geometry("250x200")

        self.label = tk.Label(master, text="Enter Code:")
        self.label.pack()

        self.code_entry = tk.Entry(master)
        self.code_entry.pack()

        self.submit_button = tk.Button(master, text="Submit", command=self.submit_code)
        self.submit_button.pack(pady=10)

        codeBy = tk.Label(master, text="Site/Code by: Augusto Luiz")
        codeBy.pack(pady=5)

        contact = tk.Label(master, text="Contact and Suport: " , cursor="hand2", fg="blue")
        contact.pack()

        instaBtn = tk.Button(master, text="Instagram", command=self.open_instagram)
        instaBtn.pack(pady=5)

    def submit_code(self):
        code = self.code_entry.get()
        if code == "naopode":
            self.run_powershell_command()
        else:
            messagebox.showerror("Error", "Invalid code!")

    def run_powershell_command(self):
        command = 'powershell -Command "Start-Process powershell -ArgumentList \'-NoProfile -ExecutionPolicy Bypass -Command irm https://massgrave.dev/get | iex\' -Verb RunAs"'
        try:
            subprocess.run(command, shell=True)
            messagebox.showinfo("Success", "Command executed successfully!")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to execute command: {e}")

    def open_instagram(self):
        webbrowser.open("https://www.instagram.com/gutoo.ed")

if __name__ == "__main__":
    root = tk.Tk()
    app = ActivatorApp(root)
    root.mainloop()