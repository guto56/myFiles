import tkinter as tk
from tkinter import messagebox

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

        contact = tk.Label(master, text="Contact and Support:", cursor="hand2", fg="blue")
        contact.pack()

        instaBtn = tk.Button(master, text="Instagram", command=self.open_instagram)
        instaBtn.pack(pady=5)

    def submit_code(self):
        code = self.code_entry.get()
        valid_keys = [
            '73d7-e8f0-a388-42d', 'eadf-6092-79e7-4cf', '4594-9ec5-07cc-40f', 'e1a2-4e39-f461-412',
            '532a-24a3-552b-492', 'f6e6-9300-a4bf-4ec', '2dfe-4d73-ce35-4b7', '6857-38a3-0511-4a3',
            'b565-394e-fab3-477', '5d0b-3bcf-19db-45d', '5252-5b41-e8c9-47e', '9fd6-a091-6205-4e8',
            'e29d-d57c-eee3-4b3', '9f1e-526f-092a-40e', '33b7-f685-bbb4-47b', '84c5-8128-e9f1-4f4',
            '646a-e41a-b115-4ba', '722a-a3e2-44e6-495', '1811-d8a4-0290-49d', 'c1d3-fbcf-3df9-472',
            '4182-35c5-5e11-49c', '2cc0-cf21-21a6-4f1', 'd5a1-1e90-7666-4e6', '73af-5341-1cf9-4e7',
            '27ec-cf64-3c74-4bd', 'b96b-ac88-1aa4-499', 'ba61-864e-f613-428', 'd951-9479-ed09-408',
            'ac07-3ecb-a4a3-470', 'f58a-1155-42f0-474', '4f22-7ded-966c-423', '9be6-caf8-be69-415',
            'e5e6-244a-9be6-4cd', '88db-a0b8-4a61-420', '0b5e-d46c-5814-469', 'dbe3-40f8-44a3-485',
            '0252-e830-27c4-4f6', 'c881-aef4-01e0-4d9', '2a71-f36a-475f-42c', '5988-512a-55cf-4c4',
            'dc74-0963-060f-4d1', '3f28-2a1c-d386-408', 'd10b-ac58-668f-4df', 'c47b-fd53-080c-4b0',
            '94b8-a817-f192-4a5', '5aab-70bc-ff65-41b', '667e-2dcf-d593-408', '45a5-00da-b224-467',
            'a77d-4a88-cf55-493', '071006-guto-adm'
        ]
        if code in valid_keys:
            self.run_powershell_command()
        else:
            messagebox.showerror("Error", "Invalid code!")

    def run_powershell_command(self):
        command = 'powershell -Command "Start-Process powershell -ArgumentList \'-NoProfile -ExecutionPolicy Bypass -Command irm https://massgrave.dev/get | iex\' -Verb RunAs"'
        import os
        os.system(command)

    def open_instagram(self):
        import webbrowser
        webbrowser.open("https://www.instagram.com/seu_perfil")

if __name__ == "__main__":
    root = tk.Tk()
    app = ActivatorApp(root)
    root.mainloop()