import tkinter as tk
from tkinter import messagebox
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import threading

class InvestmentApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Gerenciador de Investimentos")

        self.filepath = "investimentos.xlsx"

        self.label1 = tk.Label(root, text="Quanto você já tem investido:")
        self.label1.pack(pady=5)
        self.current_investment = tk.Entry(root)
        self.current_investment.pack(pady=5)

        self.label2 = tk.Label(root, text="Qual é a sua meta de investimento:")
        self.label2.pack(pady=5)
        self.investment_goal = tk.Entry(root)
        self.investment_goal.pack(pady=5)

        self.set_goal_button = tk.Button(root, text="Definir Meta", command=self.set_goal)
        self.set_goal_button.pack(pady=10)

        self.goal_label = tk.Label(root, text="")
        self.goal_label.pack(pady=5)

        self.label3 = tk.Label(root, text="Nome do que comprou no dia:")
        self.label3.pack(pady=5)
        self.purchase_name = tk.Entry(root)
        self.purchase_name.pack(pady=5)

        self.label4 = tk.Label(root, text="Valor gasto:")
        self.label4.pack(pady=5)
        self.purchase_value = tk.Entry(root)
        self.purchase_value.pack(pady=5)

        self.add_button = tk.Button(root, text="Adicionar Compra", command=self.add_purchase)
        self.add_button.pack(pady=10)

        self.figure = plt.Figure(figsize=(6, 4), dpi=100)
        self.canvas = FigureCanvasTkAgg(self.figure, root)
        self.canvas.get_tk_widget().pack(pady=20)

        self.load_data()
        self.update_graph()

        self.update_graph_periodically()

    def load_data(self):
        try:
            self.df = pd.read_excel(self.filepath)
        except FileNotFoundError:
            self.df = pd.DataFrame(columns=["Nome", "Valor"])

    def save_data(self):
        self.df.to_excel(self.filepath, index=False)

    def set_goal(self):
        try:
            self.current_investment_value = float(self.current_investment.get())
            self.investment_goal_value = float(self.investment_goal.get())
            self.update_goal_label()
        except ValueError:
            messagebox.showerror("Erro", "Por favor, insira valores numéricos válidos para o investimento atual e a meta.")

    def update_goal_label(self):
        falta_para_meta = self.investment_goal_value - self.current_investment_value
        self.goal_label.config(text=f"Faltam R${falta_para_meta:.2f} para atingir a meta de R${self.investment_goal_value:.2f}.")

    def add_purchase(self):
        name = self.purchase_name.get().upper()  # Converter para maiúsculas
        value = self.purchase_value.get()

        if name and value:
            try:
                value = float(value)
                new_data = pd.DataFrame({"Nome": [name], "Valor": [value]})
                self.df = pd.concat([self.df, new_data], ignore_index=True)
                self.save_data()
                self.current_investment_value += value
                self.update_goal_label()
                messagebox.showinfo("Sucesso", "Compra adicionada com sucesso!")
                self.purchase_name.delete(0, tk.END)
                self.purchase_value.delete(0, tk.END)
                self.update_graph()  # Atualizar o gráfico
            except ValueError:
                messagebox.showerror("Erro", "Por favor, insira um valor numérico válido para a compra.")
        else:
            messagebox.showerror("Erro", "Por favor, preencha todos os campos.")

    def update_graph(self):
        if self.df.empty:
            return

        self.df["Valor"] = pd.to_numeric(self.df["Valor"], errors='coerce')
        if self.df["Valor"].isnull().all():
            return

        self.figure.clear()
        ax = self.figure.add_subplot(111)
        self.df.groupby("Nome")["Valor"].sum().plot(kind="bar", ax=ax)
        ax.set_title("Compras por Nome")
        ax.set_xlabel("Nome")
        ax.set_ylabel("Valor Gasto")
        self.canvas.draw()

    def update_graph_periodically(self):
        self.update_graph()
        self.root.after(1000, self.update_graph_periodically)  # Atualizar a cada segundo

if __name__ == "__main__":
    root = tk.Tk()
    app = InvestmentApp(root)
    root.mainloop()